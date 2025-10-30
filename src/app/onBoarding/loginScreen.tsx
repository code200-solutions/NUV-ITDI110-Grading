import React, { useRef, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  function submit() {
    Alert.alert('Login', `Username: ${username}\nPassword: ${password}`);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className='flex-1 items-center justify-center px-6 py-12'>
        <Text className='text-2xl font-bold mb-6'>Login Screen</Text>

        <View className='w-full max-w-md'>
          <Text className='mb-2'>Username</Text>
          <TextInput
            ref={usernameRef}
            value={username}
            onChangeText={setUsername}
            placeholder='Enter username'
            returnKeyLabel={username && password ? 'login' : 'next'}
            onSubmitEditing={() =>
              username && password
                ? submit()
                : !password
                ? passwordRef.current?.focus()
                : undefined
            }
            className='border border-gray-300 rounded px-3 py-2 mb-4'
          />
          <Text className='mb-2'>Password</Text>
          <TextInput
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            placeholder='Enter password'
            secureTextEntry
            returnKeyLabel={username && password ? 'login' : 'next'}
            onSubmitEditing={() =>
              username && password
                ? submit()
                : !username
                ? usernameRef.current?.focus()
                : undefined
            }
            className='border border-gray-300 rounded px-3 py-2 mb-6'
          />
          <Pressable
            onPress={submit}
            style={({ pressed }) => ({
              alignItems: 'center',
              paddingTop: 12,
              paddingBottom: 12,
              ...(pressed
                ? { backgroundColor: '#a7c0f7' }
                : { backgroundColor: '#2563eb' }),
            })}>
            <Text className='text-white font-semibold'>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}