import { StatusBar } from 'expo-status-bar'
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Database from './src/Database';
import Campeoes from './src/Campeoes';
import Itens from './src/Itens';
import Feiticos from './src/Feiticos';
import Runas from './src/Runas';

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
              name="Database"
              component={Database}
          />
          <Stack.Screen
              name="Campeoes"
              component={Campeoes}
          />
          <Stack.Screen
              name="Itens"
              component={Itens}
          />
          <Stack.Screen
              name="Feiticos"
              component={Feiticos}
          />
          <Stack.Screen
              name="Runas"
              component={Runas}
          />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
