import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function FirstPage() {
  return (
    <View className='flex-1'>
      <View className='py-12 md:py-24 lg:py-32 xl:py-48'>
        <View className='px-4 md:px-6'>
          <View className='flex flex-col items-center gap-4 text-center'>
            <Text
              role='heading'
              className='text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-'>
              Smartify
            </Text>
            <View
              style={styles.container}
              className=' mt-12 w-full'>
              <View
                style={{ marginBottom: 10, width: '30%', alignSelf: 'center' }}>
                <Button
                  title='Login'
                  onPress={() => {
                    router.push('loginScreen');
                  }}
                />
              </View>
              <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                <Text>Or</Text>
              </View>
              <View
                style={{ marginBottom: 10, width: '30%', alignSelf: 'center' }}>
                <Button
                  title='Sign In'
                  onPress={() => {
                    router.push('loginScreen');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android shadow
    elevation: 5,
    padding: 12,
  },
});
