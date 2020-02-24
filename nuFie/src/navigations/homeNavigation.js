import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Invitation from '../screens/invitation'


export default function StackMyPost() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeFeed" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Invitation" component={Invitation} />
        </Stack.Navigator>
    )
    
}