import React, { useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  TextInput as RNTextInput,
  View,
  Text,
  Alert,
} from 'react-native';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const passwordRef = useRef<RNTextInput>(null);

  function submit() {
    // quick demo action
    Alert.alert('Login', `Username: ${username}\nPassword: ${password}`);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 items-center justify-center px-6 py-12">
        <Text className="text-2xl font-bold mb-6">Login Screen</Text>

        <View className="w-full max-w-md">
          <Text className="mb-2">Username</Text>
          <RNTextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />
          <Text className="mb-2">Password</Text>
          <RNTextInput
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry
            returnKeyType="done"
            className="border border-gray-300 rounded px-3 py-2 mb-6"
          />
          <Pressable
            onPress={submit}
            className="bg-blue-600 rounded py-3 items-center"
            android_ripple={{ color: '#2563eb' }}
          >
            <Text className="text-white font-semibold">Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}