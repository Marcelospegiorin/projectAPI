import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Home'

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
        </Stack.Navigator>
    )
}