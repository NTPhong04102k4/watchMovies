import React, {useState} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Text,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Icon component

const App = () => {
  const rotate = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(rotate, {
      toValue: 360,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const [recognizedText, setRecognizedText] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Icon name="keyboard-voice" size={24} color="green" />
      </View>
      <Animated.View
        style={{
          ...styles.box,
          transform: [
            {
              rotate: rotate.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
      <TouchableOpacity onPress={startAnimation} style={styles.button}>
        <Text>Bắt đầu xoay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
});

export default App;
