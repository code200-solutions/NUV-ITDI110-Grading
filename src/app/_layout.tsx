import React from 'react';
import '../global.css';
import { Stack } from 'expo-router';
import SafeAreaView from '../app/components/SafeAreaView';
import { StatusBar } from 'react-native';

export default function Layout() {
  return (
  <SafeAreaView>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#c5c5c5ff" 
      hidden={false} 
    />
  <Stack
    screenOptions={{
        headerShown: false,
      }}>
    <Stack.Screen name='(tabs)'/>
  </Stack>
  </SafeAreaView>
  );
}
