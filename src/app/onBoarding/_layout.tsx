import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
  <Stack>
    <Stack.Screen name= 'introScreen' options={{ headerShown: false }} />
    <Stack.Screen name= 'loginScreen' options={{ headerShown: false }} />
  </Stack>
  );
}
