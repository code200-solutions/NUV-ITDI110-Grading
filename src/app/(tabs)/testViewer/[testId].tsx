import { Tests } from "@/content/tests";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from "react-native";
import { AnswerChoice, Exercise, ImageAnswerChoice, TextAnswerChoice } from "@/types/Test.class";
import { useRoute } from "@react-navigation/native"; 


export default function TestViewerScreen() {
  const { testId } = useLocalSearchParams();
  const { page } = useLocalSearchParams();
  const router = useRoute();
  const test = useMemo(() => Tests.find((t) => t.getTestId() === testId), [testId]);
  const route = useRoute();

  if (!test) {
    return (
      <View>
        <Text>Test {testId} not found</Text>
      </View>
    );
  }

  const sequences = test.getAllExercises ? test.getAllExercises() : [];

  const imageChoices = useMemo(() => {
    const imgs: { id: string; source: any; label?: string }[] = [];
    sequences.forEach((exercise: Exercise) => {
      exercise.getAnswerChoices().forEach((choice: AnswerChoice) => {
        if (choice instanceof ImageAnswerChoice) {
          imgs.push({ id: choice.getId(), source: choice.getImageUri(), label: (choice as ImageAnswerChoice).getText ? (choice as unknown as TextAnswerChoice).getText() : undefined });
        }
      });
    });
    return imgs;
  }, [sequences]);

  //This is for the page number and seperation of answerChoices into pages
  const pageNum = Math.max(1, parseInt(String(page || '1'), 10) || 1);
  const perPage = 4;
  const totalPages = Math.max(1, Math.ceil(imageChoices.length / perPage));
  const start = (pageNum - 1) * perPage;
  const currentImages = imageChoices.slice(start, start + perPage);

  return (
    <View className= "h-full p-4">
      <Text className="mb-2">{test.getTestId()}</Text>

      {/* If no image choices at all, go back to full listing */}
      {imageChoices.length === 0 ? (
        <ScrollView>
          {sequences.length === 0 ? (
            <Text>No exercises available for this test.</Text>
          ) : (
            sequences.map((exercise: Exercise, idx: number) => (
              <View key={exercise.getQuestionId ? exercise.getQuestionId() : idx}>
                <Text >{`${idx + 1}. ${exercise.getQuestionPrompt()}`}</Text>
                <View>
                  {exercise.getAnswerChoices().map((choice: AnswerChoice) => (
                    <View className="flex-row items-center mb-2" key={choice.getId()}>
                      {choice instanceof ImageAnswerChoice ? (
                        <Image source={choice.getImageUri()} style={{ width: 160, height: 90, marginRight: 8 }} />
                      ) : choice instanceof TextAnswerChoice ? (
                        <Text >{choice.getText()}</Text>
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
        
        //show 4 images per page and navigation buttons
        <View>
          <View className="flex-row flex-wrap justify-between">
            {currentImages.map((img) => (
              <View key={img.id} style={{ width: '48%', marginBottom: 12 }}>
                <Image source={img.source} style={{ width: '100%', height: 140, resizeMode: 'contain' }} />
                <Text className="text-center mt-1">{img.id}</Text>
              </View>
            ))}
          </View>

          <View className="flex-row justify-between mt-4">
            <Pressable
              onPress={() => {
                const prev = Math.max(1, pageNum - 1);
                router.push(`/testViewer/${testId}?page=${prev}`);
              }}
              disabled={pageNum <= 1}
              style={{ padding: 10, opacity: pageNum <= 1 ? 0.5 : 1 }}
            >
              <Text>Prev</Text>
            </Pressable>

            <Text style={{ alignSelf: 'center' }}>{`Page ${pageNum} / ${totalPages}`}</Text>

            <Pressable
              onPress={() => {
                const next = Math.min(totalPages, pageNum + 1);
                if (next !== pageNum) {
                  router.push(`/testViewer/${testId}?page=${next}`);
                }
              }}
              disabled={pageNum >= totalPages}
              style={{ padding: 10, opacity: pageNum >= totalPages ? 0.5 : 1 }}
            >
              <Text>Next</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

