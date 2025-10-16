import React, { useRef, useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { isValidPassword } from '@/utils/isValidPassword';
import { isValidUsername } from '@/utils/isValidUsername';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [usernameHelper, setUsernameHelper] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHelper, setPasswordHelper] = useState('');

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  function submit() {
    if (Platform.OS === 'web') {
      alert(`Username: ${username}\nPassword: ${password}`);
    } else {
      // Native platforms
      Alert.alert('Login', `Username: ${username}\nPassword: ${password}`);
    }
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
            onChangeText={(text) => {
              setUsername(text);
              if (!isValidUsername(text)) setUsernameHelper('Invalid username');
            }}
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
          {usernameHelper && (
            <Text className='-mt-2 mb-6 text-red-600'>{usernameHelper}</Text>
          )}

          <Text className='mb-2'>Password</Text>
          <TextInput
            ref={passwordRef}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (!isValidPassword(text)) setPasswordHelper('Invalid password');
            }}
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
          {passwordHelper && (
            <Text className='-mt-4 mb-6 text-red-600'>{passwordHelper}</Text>
          )}

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
