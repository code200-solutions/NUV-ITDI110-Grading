import { Tests } from "@/content/tests";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { View, Text } from "react-native";

export default function TestViewerScreen() {
  const { testId } = useLocalSearchParams();

  const test = useMemo(() => Tests.find((t) => t.getTestId() === testId), []);

  return !test ? (
    <View>
      <Text>Test {testId} not found</Text>
    </View>
  ) : (
    <View>
      <Text>{test.getTestId()}</Text>
    </View>
  );
}
