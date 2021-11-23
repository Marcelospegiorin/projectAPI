import { useNavigation } from '@react-navigation/core';
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
import OGame from './src/OGame'
import Dicas1 from './src/Dicas/Dicas1';
import Dicas2 from './src/Dicas/Dicas2';
import Dicas3 from './src/Dicas/Dicas3';
import Dicas4 from './src/Dicas/Dicas4';
import Dicas5 from './src/Dicas/Dicas5';
import Dicas6 from './src/Dicas/Dicas6';
import Dicas7 from './src/Dicas/Dicas7';
import Dicas8 from './src/Dicas/Dicas8';
import Dicas9 from './src/Dicas/Dicas9';
import Dicas10 from './src/Dicas/Dicas10';
import Arvore from './src/Runas/Arvore';
import ComoUsar from './src/Runas/ComoUsar';

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
          <Stack.Screen
              name="Dicas1"
              component={Dicas1}
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
              component={Itens}
          />
          <Stack.Screen
              name="Arvore"
              component={Arvore}
          />
          <Stack.Screen
              name="OGame"
              component={OGame}
          />
          <Stack.Screen
              name="ComoUsar"
              component={ComoUsar}
          />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
