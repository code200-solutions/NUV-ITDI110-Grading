import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function TestsTabScreen(){
    const [timesPressed, setTimesPressed] = useState(0);

  return (
    <View>
        <View style={styles.containerBox}>
        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.containerBox,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Is Pressed' : 'Press To View Test'}</Text>
          )}
        </Pressable>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  containerBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ffffffff',
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
        width: 2,
        height: 2
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 3
  }
});
