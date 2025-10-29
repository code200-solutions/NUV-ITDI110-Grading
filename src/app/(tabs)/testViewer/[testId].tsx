import { Tests } from "@/content/tests";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { AnswerChoice, ImageAnswerChoice, TextAnswerChoice } from "@/types/Test.class";
import { useRoute } from "@react-navigation/native"; 


export default function TestViewerScreen() {
  const { testId } = useLocalSearchParams();
  const test = useMemo(() => Tests.find((t) => t.getTestId() === testId), [testId]);

  if (!test) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Test {testId} not found</Text>
      </View>
    );
  }

  const sequences = test.getAllExercises ? test.getAllExercises() : [];

  return (
    <View>
    <ScrollView>
      <Text>{test.getTestId()}</Text>
      {sequences.length === 0 ? (
        <Text>No exercises available for this test.</Text>
      ) : (
        sequences.map((exercise: any, idx: number) => (
          <View key={exercise.getQuestionId ? exercise.getQuestionId() : idx}>
            <Text >{`${idx + 1}. ${exercise.getQuestionPrompt()}`}</Text>
          <View>
            {exercise.getAnswerChoices().map((choice: any) => (
              <View 
              key={choice.getId()}
              >
                  {/* Render if its ImgUri or text */}
                  {typeof (choice as any).getImageUri === "function" ? (
                    <Image 
                    source={{ uri: (choice as any).getImageUri() }}
                    />
                  ) : typeof (choice as any).getText === "function" ? (
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
    </View>
  );
}
