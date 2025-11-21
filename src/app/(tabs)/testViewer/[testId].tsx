import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Tests } from "@/content/tests";
import {
  Exercise,
  TextAnswerChoice,
  ImageAnswerChoice,
  AnswerChoice,
} from "@/types/Test.class";
import { Audio } from "expo-av";

export default function TestViewerScreen() {
  const { testId } = useLocalSearchParams();
  const router = useRouter();

  // Get test object
  const test = useMemo(() => Tests.find((t) => t.getTestId() === testId), [testId]);

  if (!test) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-700">Test {testId} not found</Text>
      </View>
    );
  }

const exercises = test.getAllExercises();
const totalQuestions = exercises.length;

const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswers, setSelectedAnswers] = useState<{
  [key: string]: string[];
}>({});
const [isSubmitted, setIsSubmitted] = useState(false);
const [audioState, setAudioState] = useState<{
  [key: string]: { isPlaying: boolean; duration: number; position: number; sound: any };
}>({});

const audioStateRef = useRef(audioState);
const setAudioStateAndRef = (updater: any) => {
  setAudioState((prev) => {
    const newState = typeof updater === "function" ? updater(prev) : updater;
    audioStateRef.current = newState;
    return newState;
  });
};

// Poll as a fallback to ensure UI gets updated while audio is playing.
useEffect(() => {
  const interval = setInterval(() => {
    (async () => {
      const entries = Object.entries(audioStateRef.current);
      for (const [id, s] of entries) {
        if (s?.sound) {
          try {
            const status = await s.sound.getStatusAsync();
            if (status.isLoaded) {
              setAudioStateAndRef((prev: any) => ({
                ...prev,
                [id]: {
                  ...prev[id],
                  position: status.positionMillis || 0,
                  duration: status.durationMillis || prev[id]?.duration || 0,
                  isPlaying: status.isPlaying,
                },
              }));
            }
          } catch (e) {
            // noop
          }
        }
      }
    })();
  }, 500);

  return () => clearInterval(interval);
}, []);

const [barWidths, setBarWidths] = useState<Record<string, number>>({});

const question = exercises[currentQuestion];

const handleAudioPlay = async (questionId: string) => {
  const state = audioState[questionId];
  
  try {
    if (state && state.sound) {
      await state.sound.playAsync();
      setAudioStateAndRef(prev => ({
        ...prev,
        [questionId]: { ...state, isPlaying: true }
      }));
    } else {
      const { sound } = await Audio.Sound.createAsync({
        uri: question.getAudioUri() as string,
      });
      
      const status = await sound.getStatusAsync();
      const duration = status.isLoaded ? status.durationMillis ?? 0 : 0;
      setAudioStateAndRef(prev => ({
        ...prev,
        [questionId]: {
          isPlaying: true,
          duration,
          position: 0,
          sound
        }
      }));
      
      sound.setOnPlaybackStatusUpdate((status: any) => {
        if (status.isLoaded) {
          setAudioStateAndRef(prev => ({
            ...prev,
            [questionId]: {
              ...prev[questionId],
              position: status.positionMillis || 0,
              isPlaying: status.isPlaying
            }
          }));
        }
      });
      
      await sound.playAsync();
    }
  } catch (e) {
    console.warn("Audio error:", e);
  }
};

const handleAudioPause = async (questionId: string) => {
  const state = audioState[questionId];
  
  try {
    if (state && state.sound) {
      await state.sound.pauseAsync();
      setAudioStateAndRef(prev => ({
        ...prev,
        [questionId]: { ...state, isPlaying: false }
      }));
    }
  } catch (e) {
    console.warn("Audio error:", e);
  }
};

const handleAudioStop = async (questionId: string) => {
  const state = audioState[questionId];
  
  try {
    if (state && state.sound) {
      await state.sound.stopAsync();
      await state.sound.setPositionAsync(0);
      setAudioStateAndRef(prev => ({
        ...prev,
        [questionId]: { ...state, isPlaying: false, position: 0 }
      }));
    }
  } catch (e) {
    console.warn("Audio error:", e);
  }
};

const formatTime = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
const selectedChoiceId = selectedAnswers[question.getQuestionId()] ?? null;

// Select answer
const handleSelect = (questionId: string, choiceId: string) => {
  setSelectedAnswers((prev) => {
    const current = prev[questionId] || [];

    // Toggle off
    if (current.includes(choiceId)) {
      return {
        ...prev,
        [questionId]: current.filter((id) => id !== choiceId),
      };
    }

    // Limit to 3 choices
    if (current.length >= 3) {
      return prev;
    }

    // Add new choice
    return {
      ...prev,
      [questionId]: [...current, choiceId],
    };
  });
};
  // Navigation
  const goToNext = () => {
    if (currentQuestion < totalQuestions - 1) setCurrentQuestion(currentQuestion + 1);
  };
  const goToPrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  // Submit test
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    const score = exercises.reduce((acc, q) => {
      const selectedIds = selectedAnswers[q.getQuestionId()] || [];
      return acc + (q.isCorrect(selectedIds) ? 1 : 0);
    }, 0);

    return (
      <View className="flex-1 bg-white p-6">
        <Text className="text-2xl font-bold text-center mb-4 text-gray-800">
          Test Completed
        </Text>
        <Text className="text-center text-lg mb-6 text-gray-700">
          You scored {score} / {totalQuestions}
        </Text>

        <ScrollView className="flex-1">
          {exercises.map((q, i) => {
            const selectedIds = selectedAnswers[q.getQuestionId()] || [];
            const isCorrect = q.isCorrect(selectedIds);
            const correctId = q["goodAnswerId"]; 

            return (
              <View key={q.getQuestionId()} className="flex-1 mb-5 border-b pb-4">
                <Text className="font-semibold mb-2 text-gray-900">
                  {i + 1}. {q.getQuestionPrompt()}
                </Text>
                <Text
                  className={`${
                    isCorrect ? "text-green-600" : "text-red-600"
                  } font-medium mb-1`}
                >
                  {isCorrect ? "Correct" : "Incorrect"}
                </Text>
                <Text>Your answer: {selectedIds.length ? selectedIds.join(", ") : "None"}</Text>
                <Text className="text-gray-700">Correct answer: {correctId}</Text>
              </View>
            );
          })}
        </ScrollView>

        <Pressable
          onPress={() => router.back()}
          className="mt-6 bg-blue-600 py-3 rounded-lg"
        >
          <Text className="text-white text-center font-semibold">Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 p-8">
      {/*Progress Bar*/}
      <View className="w-full h-2 bg-gray-200 rounded-full mb-4">
        <View
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
          className="h-full bg-purple-800 rounded-full"
        />
      </View>
      <View className="flex-1 bg-white p-8 rounded-lg">
        {/* Question prompt */}
        <Text className="text-lg font-semibold mb-4 text-gray-900">
          {question.getQuestionPrompt()}
        </Text>

        {/* Exercise instruction + Audio block for the question */}
        {question.getInstructionText && question.getInstructionText() && (
          <Text className="text-base text-gray-700 mb-4">
            {question.getInstructionText()}
          </Text>
        )}

        {question.getAudioUri && question.getAudioUri() && (
          <View className="bg-gray-100 p-4 rounded-lg mb-6">
            <Text className="text-gray-800 font-semibold mb-2">
              Click and play to listen:
            </Text>

            <View className="flex-row items-center gap-3 mb-3">
              {audioState[question.getQuestionId()]?.isPlaying ? (
                <Pressable
                  onPress={() => handleAudioPause(question.getQuestionId())}
                  className="bg-blue-700 py-2 px-4 rounded-lg"
                  style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                >
                  <Text className="text-white text-center">⏸ Pause</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => handleAudioPlay(question.getQuestionId())}
                  className="bg-blue-700 py-2 px-4 rounded-lg"
                  style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                >
                  <Text className="text-white text-center">▶ Play</Text>
                </Pressable>
              )}
              
              <Pressable
                onPress={() => handleAudioStop(question.getQuestionId())}
                className="bg-blue-700 py-2 px-4 rounded-lg"
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
              >
                <Text className="text-white text-center">⏹ Stop</Text>
              </Pressable>
              
              <Text className="text-gray-700 text-xs font-medium whitespace-nowrap">
                {formatTime(audioState[question.getQuestionId()]?.position || 0)} / {formatTime(audioState[question.getQuestionId()]?.duration || 0)}
              </Text>
            </View>

            <Pressable
              onPress={async (e) => {
                const state = audioState[question.getQuestionId()];
                if (state?.sound && state?.duration) {
                  const nativeEvent = e.nativeEvent;
                  const width = barWidths[question.getQuestionId()] || 1;
                  const percentage = Math.min(Math.max(nativeEvent.locationX / width, 0), 1);
                  const newPosition = percentage * state.duration;
                  try {
                    await state.sound.setPositionAsync(newPosition);
                    setAudioStateAndRef((prev: any) => ({
                      ...prev,
                      [question.getQuestionId()]: {
                        ...prev[question.getQuestionId()],
                        position: newPosition,
                      },
                    }));
                  } catch (err) {
                    // ignore
                  }
                }
              }}
              className="w-full"
            >
              <View
                className="w-full bg-gray-300 h-1.5 rounded-full overflow-hidden"
                onLayout={(e) => {
                  const w = e.nativeEvent.layout.width;
                  setBarWidths((prev) => ({ ...prev, [question.getQuestionId()]: w }));
                }}
              >
                <View
                  style={{
                    width: `${((audioState[question.getQuestionId()]?.position || 0) / (audioState[question.getQuestionId()]?.duration || 1)) * 100}%`,
                  }}
                  className="h-full bg-blue-600"
                />
              </View>
            </Pressable>
          </View>
        )}

        <ScrollView className="flex-1 h-100%">
          {/* Text Answers */}
          {question
            .getAnswerChoices()
            .some((c) => c instanceof TextAnswerChoice) && (
            <View className="mb-6">
              {question.getAnswerChoices().map((choice: AnswerChoice) => {
                if (choice instanceof TextAnswerChoice) {
                  const selectedIds =
                    selectedAnswers[question.getQuestionId()] || [];
                  const isSelected = selectedIds.includes(choice.getId());
                  return (
                    <Pressable
                      key={choice.getId()}
                      onPress={() =>
                        handleSelect(question.getQuestionId(), choice.getId())
                      }
                      className={`flex-row items-center mb-3 border rounded-lg px-4 py-3 ${
                        isSelected
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <View
                        className={`w-5 h-5 mr-3 rounded-full border-2 ${
                          isSelected
                            ? "border-blue-600 bg-blue-600"
                            : "border-gray-400"
                        }`}
                      />
                      <Text className="text-gray-900">{choice.getText()}</Text>
                    </Pressable>
                  );
                }
                return null;
              })}
            </View>
          )}

          {/* IMAGE ANSWERS — 2 per row */}
          {question
            .getAnswerChoices()
            .some((c) => c instanceof ImageAnswerChoice) && (
            <View className="flex-row flex-wrap justify-between">
              {question.getAnswerChoices().map((choice: AnswerChoice) => {
                if (choice instanceof ImageAnswerChoice) {
                  const selectedIds = selectedAnswers[question.getQuestionId()] || [];
                  const isSelected = selectedIds.includes(choice.getId());

                  return (
                    <View key={choice.getId()} className="mb-4 ">
                      <Text className="text-center py-2 text-gray-800 font-medium">
                        {choice.getId()}
                      </Text>

                      <Pressable
                        onPress={() =>
                          handleSelect(question.getQuestionId(), choice.getId())
                        }
                        className={`border rounded-lg overflow-hidden p-2 ${
                          isSelected
                            ? "border-blue-600 bg-blue-100"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        <Image
                          source={choice.getImageUri()}
                          className="w-full h-40"
                          resizeMode="cover"
                        />
                      </Pressable>

                    </View>
                  );
                }
                return null;
              })}
            </View>
          )}
          {/* Question header */}
          <Text className="text-center text-gray-600 p-4">
            Question {currentQuestion + 1} of {totalQuestions}
          </Text>
        </ScrollView>

        {/* Navigation Buttons */}
        <View className="flex-row justify-between items-center mt-6">
          <Pressable
            onPress={goToPrevious}
            disabled={currentQuestion === 0}
            className={`rounded py-2 px-4 ${
              currentQuestion === 0 ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            <Text className="text-white font-semibold">Previous</Text>
          </Pressable>

          {currentQuestion === totalQuestions - 1 ? (
            <Pressable
              onPress={handleSubmit}
              className="rounded py-2 px-4 bg-green-600"
            >
              <Text className="text-white font-semibold">Submit</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={goToNext}
              className="rounded py-2 px-4 bg-blue-600"
            >
              <Text className="text-white font-semibold">Next</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}