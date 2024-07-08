import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PushNofi from '../screen/pushNofi';
import Home from '../screen/Home';
import Login from '../screen/Login/LoginScreen';
import {useSelector} from 'react-redux';
import SpeechRecognitionScreen from '../screen/Login/Speech';
const RootStack = createNativeStackNavigator();

export default function Stack({initRoute}: any) {
  const {id, accessToken, userName} = useSelector(state => state.login);
  const initialRouteName = id ? 'Home' : 'Login';
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SpeechRecognitionScreen'}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="PushNofi" component={PushNofi} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen
        name="SpeechRecognitionScreen"
        component={SpeechRecognitionScreen}
      />
    </RootStack.Navigator>
  );
}
