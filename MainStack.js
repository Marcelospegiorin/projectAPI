import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/Home'
import Database from './src/Database'

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
        </Stack.Navigator>
    )
}
