import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/Home'
import Database from './src/Database'
import Campeoes from './src/Campeoes';
import Itens from './src/Itens';
import Feiticos from './src/Feiticos';
import Runas from './src/Runas';
import OGame from './src/OGame'
import Arvore from './src/Runas/Arvore';

const Stack = createStackNavigator();

export default function MainStack() {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Database" component={Database}/>
            <Stack.Screen name="Campeoes" component={Campeoes}/>
            <Stack.Screen name="Itens" component={Itens}/>
            <Stack.Screen name="Feiticos" component={Feiticos}/>
            <Stack.Screen name="Runas" component={Runas}/>
            <Stack.Screen name="OGame" component={OGame}/> 
            <Stack.Screen name="Arvore" component={Arvore}/>
        </Stack.Navigator>
    )
}
