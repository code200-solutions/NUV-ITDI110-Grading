import React from 'react';
import '../global.css';
import { Stack } from 'expo-router';
import SafeAreaView from '../components/SafeAreaView/SafeAreaView';

export default function Layout() {
  return (
  <SafeAreaView>
  <Stack
    screenOptions={{
        headerShown: false,
      }}>
    <Stack.Screen name='(tabs)/(mainTabs)'/>
  </Stack>
  </SafeAreaView>
  );
}
