import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/Home'
import Database from './src/Database'
import Campeoes from './src/Campeoes';
import Items from './src/Items';
import Feiticos from './src/Feiticos';
import Runas from './src/Runas';
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
            <Stack.Screen name="Itens" component={Items}/>
            <Stack.Screen name="Feiticos" component={Feiticos}/>
            <Stack.Screen name="Runas" component={Runas}/>
            <Stack.Screen name="Arvore" component={Arvore}/>
        </Stack.Navigator>
    )
}
