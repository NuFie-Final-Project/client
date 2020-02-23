import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/searchScreen'
import CategoryScreen from '../screens/categoryScreen'


export default function StackMyPost() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
            <Stack.Screen name="Category" component={CategoryScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
    
}