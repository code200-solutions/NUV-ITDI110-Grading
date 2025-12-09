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
        colors={['#D00DC3', '#1976D2', ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
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