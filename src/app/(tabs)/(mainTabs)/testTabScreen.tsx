import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Tests } from "@/content/tests";
import { router } from "expo-router";

//@TODO: initialize with real tests reading from the file
export default function TestsTabScreen() {
  const displayTest = useCallback((testId: string) => {
    router.push({
      pathname: "/(tabs)/testViewer/[testId]",
      params: { testId: testId },
    });
  }, []);
  return (
    <View className="flex-1 flex-col w-full p-2">
      <ScrollView>
        {Tests.map((test, index) => (
          <Pressable
            className="py-2 border mb-1"
            key={`test#${test.getTestId()}`}
            onPress={() => displayTest(test.getTestId())}
          >
            <Text>* Waiting for a proper test name: {test.getTestId()}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
