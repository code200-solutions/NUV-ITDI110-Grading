import React, { useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Tests } from "@/content/tests";
import { router } from "expo-router";
import AppBackground from "@/components/AppBackground/AppBackground";

//initialize with real tests reading from the file
export default function TestsTabScreen() {
  const displayTest = useCallback((testId: string) => {
    router.push({
      pathname: "/(tabs)/testViewer/[testId]",
      params: { testId: testId },
    });
  }, []);
  return (
    <View>
      <AppBackground/>
    <View className="flex-1 flex-col w-full p-4">
      
      <ScrollView>
        {Tests.map((test) => (
          <Pressable
            key={test.getTestId()}
            onPress={() => displayTest(test.getTestId())}
            className="p-4 mb-3 bg-white rounded-xl border border-gray-200 active:bg-gray-100"
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
    </View>
  );
}
