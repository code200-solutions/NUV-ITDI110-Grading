import React from "react";
import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientButton({
  title,
  onPress,
  colors = ["#19D2BC", "#1976D2"] as const,
  className = "",
  textClassName = "",
  disabled = false,
}) {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={colors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className={`px-5 py-3 rounded-lg items-center justify-center ${
          disabled ? "opacity-60" : ""
        } ${className}`}
      >
        <Text className={`text-white font-semibold text-base ${textClassName}`}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}