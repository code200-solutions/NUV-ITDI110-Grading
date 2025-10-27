import { Tabs } from 'expo-router';
import React from 'react';
import { Icon } from 'react-native-paper';

export default function ProtectedTabLayout() {

    type tabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
  };

  return(
    <Tabs
        screenOptions={{
          freezeOnBlur: true,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name='homeTabScreen'
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }: tabBarIconProps) => (
              <Icon
                source={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='testTabScreen'
          options={{
            title: 'Tests',
            tabBarIcon: ({ focused, color, size }: tabBarIconProps) => (
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