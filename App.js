import { StatusBar } from 'expo-status-bar'
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Dicas from './src/Dicas';
import Items from './src/Items'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" hidden={true}/>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
      >
          <Stack.Screen
              name="Home"
              component={Home}
          />
          <Stack.Screen
              name="Dicas"
              component={Dicas}
          />
          <Stack.Screen
              name="Items"
              component={Items}
          />
      </Stack.Navigator>
    </NavigationContainer>
   );
}