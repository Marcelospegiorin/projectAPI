import { StatusBar } from 'expo-status-bar'
import React from 'react';
import MainStack from './MainStack'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
      <NavigationContainer>
        <MainStack />
        <StatusBar style="light" hidden={true}/>
      </NavigationContainer>
    );
}