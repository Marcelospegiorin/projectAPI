import { StatusBar } from 'expo-status-bar'
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Dicas from './src/Dicas';
import Dicas2 from './src/Dicas2';
import Dicas3 from './src/Dicas3';
import Dicas4 from './src/Dicas4';
import Dicas5 from './src/Dicas5';
import Dicas6 from './src/Dicas6';
import Dicas7 from './src/Dicas7';
import Dicas8 from './src/Dicas8';
import Dicas9 from './src/Dicas9';
import Dicas10 from './src/Dicas10';
import Items from './src/Items';


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
              name="Dicas2"
              component={Dicas2}
          />
          <Stack.Screen
              name="Dicas3"
              component={Dicas3}
          />
          <Stack.Screen
              name="Dicas4"
              component={Dicas4}
          />
          <Stack.Screen
              name="Dicas5"
              component={Dicas5}
          />
          <Stack.Screen
              name="Dicas6"
              component={Dicas6}
          />
          <Stack.Screen
              name="Dicas7"
              component={Dicas7}
          />
          <Stack.Screen
              name="Dicas8"
              component={Dicas8}
          />
          <Stack.Screen
              name="Dicas9"
              component={Dicas9}
          />
          <Stack.Screen
              name="Dicas10"
              component={Dicas10}
          />
          <Stack.Screen
              name="Items"
              component={Items}
          />
      </Stack.Navigator>
    </NavigationContainer>
   );
}