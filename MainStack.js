import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/Home'
import OGame from './src/OGame'


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
            <Stack.Screen name="OGame" component={OGame}/> 

        </Stack.Navigator>
    )
}