import { Tabs } from 'expo-router';
import React from 'react';
import { Icon } from 'react-native-paper';

export default function ProtectedTabLayout() {
  return (
    <Tabs
      screenOptions={{
        freezeOnBlur: true,
        headerShown: false,
        tabBarActiveTintColor: '#004ea1ff',
        tabBarInactiveTintColor: '#004ea1ff',
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
              source={focused ? 'file-edit' : 'file-edit-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="gradesTabScreen"
        options={{
          title: 'Grades',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              source={focused ? 'school' : 'school-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      /> 
      <Tabs.Screen
        name="profileTabScreen"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              source={focused ? 'account' : 'account-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      /> 
    </Tabs>
  );
}