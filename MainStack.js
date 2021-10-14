import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/Home'
import Campeoes from './src/Campeoes'
import Feiticos from './src/Feiticos'
import Itens from './src/Itens'
import Runas from './src/Runas'

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
            <Stack.Screen name="Campeoes" component={Campeoes}/>
            <Stack.Screen name="Feiticos" component={Feiticos}/>
            <Stack.Screen name="Itens" component={Itens}/>
            <Stack.Screen name="Runas" component={Runas}/>
        </Stack.Navigator>
    )
}
