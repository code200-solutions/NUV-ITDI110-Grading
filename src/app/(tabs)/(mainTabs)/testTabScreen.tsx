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
        {Tests.map((test) => (
          <Pressable
            key={test.getTestId()}
            onPress={() => displayTest(test.getTestId())}
            className="p-4 mb-3 bg-white rounded-xl border border-gray-200 shadow-sm active:bg-gray-100"
          >
            <Text className="text-lg font-semibold text-gray-800">
              {test.getTestId()}
            </Text>
            <Text className="text-gray-600 mt-1">
              {test.getDescription
                ? test.getDescription()
                : "No description available."}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
