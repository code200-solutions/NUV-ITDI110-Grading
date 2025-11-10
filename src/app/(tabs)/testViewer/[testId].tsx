import { Tests } from "@/content/tests";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  AnswerChoice,
  Exercise,
  ImageAnswerChoice,
  TextAnswerChoice,
} from "@/types/Test.class";
import { useRoute } from "@react-navigation/native";

export default function TestViewerScreen() {
  const { testId, page } = useLocalSearchParams();
  const router = useRouter();
  const route = useRoute();

  // Find the selected test
  const test = useMemo(
    () => Tests.find((t) => t.getTestId() === testId),
    [testId]
  );

  if (!test) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-700">Test {testId} not found</Text>
      </View>
    );
  }

  const exercises = test.getAllExercises ? test.getAllExercises() : [];
  const totalQuestions = exercises.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});

  const question = exercises[currentQuestion];

  const handleSelect = (questionId: string, choiceId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: choiceId }));
  };

  const goToNext = () => {
    if (currentQuestion < totalQuestions - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const selectedChoiceId = selectedAnswers[question.getQuestionId()] || null;

  return (
    <View className="flex-1 bg-gray-50 p-4">
      {/* Test title */}
      <Text className="text-xl font-bold mb-4 text-gray-800 text-center">
        {test.getTestId()}
      </Text>

      <ScrollView>
        {/* Question */}
        <Text className="text-lg font-semibold mb-4 text-gray-900">
          {`${currentQuestion + 1}. ${question.getQuestionPrompt()}`}
        </Text>

        {/* Choices */}
        {question.getAnswerChoices().map((choice: AnswerChoice) => {
          const isSelected = selectedChoiceId === choice.getId();

          if (choice instanceof ImageAnswerChoice) {
            return (
              <Pressable
                key={choice.getId()}
                onPress={() =>
                  handleSelect(question.getQuestionId(), choice.getId())
                }
                className={`mb-4 rounded-xl overflow-hidden border-2 ${
                  isSelected ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <Image
                  source={choice.getImageUri()}
                  className="w-full h-40"
                  resizeMode="cover"
                />
                <Text className="text-center py-2 text-gray-800">
                  {choice.getId()}
                </Text>
              </Pressable>
            );
          } else if (choice instanceof TextAnswerChoice) {
            return (
              <Pressable
                key={choice.getId()}
                onPress={() =>
                  handleSelect(question.getQuestionId(), choice.getId())
                }
                className={`flex-row items-center mb-3 border rounded-lg px-4 py-3 ${
                  isSelected ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"
                }`}
              >
                <View
                  className={`w-5 h-5 mr-3 rounded-full border-2 ${
                    isSelected ? "border-blue-600 bg-blue-600" : "border-gray-400"
                  }`}
                />
                <Text className="text-gray-900">{choice.getText()}</Text>
              </Pressable>
            );
          }

          return null;
        })}
      </ScrollView>

      {/* Navigation Buttons */}
      <View className="flex-row justify-between items-center mt-6">
        <TouchableOpacity
          onPress={goToPrevious}
          disabled={currentQuestion === 0}
          className={`rounded py-2 px-4 ${
            currentQuestion === 0 ? "bg-gray-400" : "bg-blue-600 active:bg-blue-700"
          }`}
        >
          <Text className="text-white font-semibold">Previous</Text>
        </TouchableOpacity>

        <Text className="text-gray-700 font-medium">
          {currentQuestion + 1} / {totalQuestions}
        </Text>

        <TouchableOpacity
          onPress={goToNext}
          disabled={currentQuestion >= totalQuestions - 1}
          className={`rounded py-2 px-4 ${
            currentQuestion >= totalQuestions - 1
              ? "bg-gray-400"
              : "bg-blue-600 active:bg-blue-700"
          }`}
        >
          <Text className="text-white font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}