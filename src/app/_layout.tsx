import React from 'react';
import '../global.css';
import { Stack } from 'expo-router';
import SafeAreaView from '../app/components/SafeAreaView';

export default function Layout() {
  return (
  <SafeAreaView>
  <Stack
    screenOptions={{
        headerShown: false,
      }}>
    <Stack.Screen name='(tabs)'/>
  </Stack>
  </SafeAreaView>
  );
}
