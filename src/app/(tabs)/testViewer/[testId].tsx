import React, { useMemo, useState } from "react";
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
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = exercises[currentQuestion];
  const selectedChoiceId = selectedAnswers[question.getQuestionId()] || null;

  // Select answer
  const handleSelect = (questionId: string, choiceId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: choiceId }));
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
      const selectedId = selectedAnswers[q.getQuestionId()];
      return acc + (q.isCorrect(selectedId) ? 1 : 0);
    }, 0);

    return (
      <View className="flex-1 bg-white p-6">
        <Text className="text-2xl font-bold text-center mb-4 text-gray-800">
          Test Completed
        </Text>
        <Text className="text-center text-lg mb-6 text-gray-700">
          You scored {score} / {totalQuestions}
        </Text>

        <ScrollView>
          {exercises.map((q, i) => {
            const selectedId = selectedAnswers[q.getQuestionId()];
            const isCorrect = q.isCorrect(selectedId);
            const correctId = q["goodAnswerId"]; 

            return (
              <View key={q.getQuestionId()} className="mb-5 border-b pb-4">
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
                <Text className="text-gray-700">Your answer: {selectedId || "None"}</Text>
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
    <View className="flex-1 p-4">
      {/*Progress Bar*/}
      <View className="w-full h-2 bg-gray-200 rounded-full mb-4">
        <View
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
          className="h-full bg-blue-500 rounded-full"
        />
      </View>
      <View className=" bg-white p-8 rounded-lg">
        {/* Question prompt */}
        <Text className="text-lg font-semibold mb-4 text-gray-900">
          {question.getQuestionPrompt()}
        </Text>
        <ScrollView className="flex-1">
          {/* Text Answers */}
          {question
            .getAnswerChoices()
            .some((c) => c instanceof TextAnswerChoice) && (
            <View className="mb-6">
              {question.getAnswerChoices().map((choice: AnswerChoice) => {
                if (choice instanceof TextAnswerChoice) {
                  const isSelected = selectedChoiceId === choice.getId();
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
                  const isSelected = selectedChoiceId === choice.getId();
                  return (
                    <View
                      key={choice.getId()}
                      className="mb-4" 
                    >
                      <Text className="text-center py-2 text-gray-800 font-medium">
                        {choice.getId()}
                      </Text>
                      <Pressable
                        onPress={() =>
                          handleSelect(question.getQuestionId(), choice.getId())
                        }
                        className={`rounded-xl overflow-hidden border-2 ${
                          isSelected ? "border-blue-500" : "border-gray-300"
                        }`}
                      >
                        <Image
                          source={choice.getImageUri()}
                          className="w-full h-36"
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
      </View>
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
  );
}