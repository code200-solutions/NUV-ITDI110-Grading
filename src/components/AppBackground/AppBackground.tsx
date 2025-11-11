import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface AppBackgroundProps {
  style?: StyleProp<ViewStyle>;
  height?: number;
}
const AppBackground: React.FC<AppBackgroundProps> = ({ style, height = 220 }) => {
  return (
    <View style={[styles.container, { height }, style]}>
      <LinearGradient
        colors={['#1976D2', '#7B1FA2']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});

export default AppBackground;