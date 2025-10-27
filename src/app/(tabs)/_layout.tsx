import { Tabs } from 'expo-router';
import React from 'react';
import { Icon } from 'react-native-paper';

export default function ProtectedTabLayout() {
  return (
    <Tabs
      screenOptions={{
        freezeOnBlur: true,
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
      }}
    >
      <Tabs.Screen
        name="homeTabScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              source={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="testTabScreen"
        options={{
          title: 'Tests',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              source={focused ? 'account' : 'account-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Example: Add more tabs easily */}
      {/* 
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              source={focused ? 'cog' : 'cog-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      /> 
      */}
    </Tabs>
  );
}