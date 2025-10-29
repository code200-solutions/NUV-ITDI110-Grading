import { Tests } from "@/content/tests";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { AnswerChoice, Exercise, ImageAnswerChoice, TextAnswerChoice } from "@/types/Test.class";
import { useRoute } from "@react-navigation/native"; 


export default function TestViewerScreen() {
  const { testId } = useLocalSearchParams();
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

  return (
    <View>
    <ScrollView>
      <Text>{test.getTestId()}</Text>
      {sequences.length === 0 ? (
        <Text>No exercises available for this test.</Text>
      ) : (
        sequences.map((exercise: Exercise, idx: number) => (
          <View key={exercise.getQuestionId ? exercise.getQuestionId() : idx}>
            <Text >{`${idx + 1}. ${exercise.getQuestionPrompt()}`}</Text>
          <View>
            {exercise.getAnswerChoices().map((choice: AnswerChoice) => (
              <View 
              key={choice.getId()}
              >
                  {/* Render if its ImgUri or text */}
                  {choice instanceof ImageAnswerChoice ? (
                    <Image 
                    source={choice.getImageUri()}
                    />
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
    </View>
  );
}
