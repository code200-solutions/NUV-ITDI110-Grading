import { Tests } from "@/content/tests";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
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

  //Important for testId
  const test = useMemo(
    () => Tests.find((t) => t.getTestId() === testId),
    [testId]
  );

  const route = useRoute();

  if (!test) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-700">Test {testId} not found</Text>
      </View>
    );
  }

  const sequences = test.getAllExercises ? test.getAllExercises() : [];

  // Flatten all answer choices into one array of images
  const imageChoices = useMemo(() => {
    const imgs: { id: string; source: ImageSourcePropType; label?: string }[] =
      [];
    sequences.forEach((exercise: Exercise) => {
      exercise.getAnswerChoices().forEach((choice: AnswerChoice) => {
        if (choice instanceof ImageAnswerChoice) {
          imgs.push({
            id: choice.getId(),
            source: choice.getImageUri(),
            label:
              typeof (choice as unknown as TextAnswerChoice).getText === "function"
                ? (choice as unknown as TextAnswerChoice).getText()
                : undefined,
          });
        }
      });
    });
    return imgs;
  }, [sequences]);

  const pageNum = Math.max(1, parseInt(String(page || "1"), 10) || 1);
  const perPage = 4;
  const totalPages = Math.max(1, Math.ceil(imageChoices.length / perPage));
  const start = (pageNum - 1) * perPage;
  const currentImages = imageChoices.slice(start, start + perPage);

  // Keep track of which image is selected
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedChoice(id);
  };

  const goToPage = (newPage: number) => {
    router.push(`/testViewer/${testId}?page=${newPage}`);
  };

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4 text-gray-800">
        {test.getTestId()}
      </Text>

      {imageChoices.length === 0 ? (
        <ScrollView>
          {sequences.length === 0 ? (
            <Text>No exercises available for this test.</Text>
          ) : (
            sequences.map((exercise: Exercise, idx: number) => (
              <View key={exercise.getQuestionId() || idx}>
                <Text>{`${idx + 1}. ${exercise.getQuestionPrompt()}`}</Text>
                <View>
                  {exercise.getAnswerChoices().map((choice: AnswerChoice) => (
                    <View
                      className="flex-row items-center mb-2"
                      key={choice.getId()}
                    >
                      {choice instanceof ImageAnswerChoice ? (
                        <Image
                          source={choice.getImageUri()}
                          className="w-40 h-24 mr-2 rounded-md"
                        />
                      ) : choice instanceof TextAnswerChoice ? (
                        <Text>{choice.getText()}</Text>
                      ) : null}
                      <Text>{choice.getId()}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))
          )}
        </ScrollView>
      ) : (
        <>
          {/* Grid of images */}
          <View className="flex-row flex-wrap justify-between">
            {currentImages.map((img) => {
              const isSelected = selectedChoice === img.id;
              return (
                <Pressable
                  key={img.id}
                  onPress={() => handleSelect(img.id)}
                  className={`w-[48%] mb-4 rounded-xl overflow-hidden shadow-sm bg-white relative ${
                    isSelected ? "border-4 border-green-500" : "border border-gray-200"
                  }`}
                >
                  <Image
                    source={img.source}
                    className="w-full h-36"
                    resizeMode="cover"
                  />
                  {isSelected && (
                    <View className="absolute top-2 right-2 bg-white/80 rounded-full p-1">
                      <Text className="text-lg">✅</Text>
                    </View>
                  )}
                  <Text className="text-center text-gray-800 py-2">
                    {img.label || img.id}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Navigation buttons */}
          <View className="flex-row justify-between items-center mt-4">
            <TouchableOpacity
              onPress={() => goToPage(Math.max(1, pageNum - 1))}
              disabled={pageNum <= 1}
              className={`rounded-full py-2 px-4 ${
                pageNum <= 1
                  ? "bg-gray-400"
                  : "bg-blue-600 active:bg-blue-700"
              }`}
            >
              <Text className="text-white font-semibold">⬅ Previous</Text>
            </TouchableOpacity>

            <Text className="text-gray-700 font-medium">
              Page {pageNum} / {totalPages}
            </Text>

            <TouchableOpacity
              onPress={() => goToPage(Math.min(totalPages, pageNum + 1))}
              disabled={pageNum >= totalPages}
              className={`rounded-full py-2 px-4 ${
                pageNum >= totalPages
                  ? "bg-gray-400"
                  : "bg-blue-600 active:bg-blue-700"
              }`}
            >
              <Text className="text-white font-semibold">Next ➡</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}