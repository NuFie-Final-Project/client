import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileAccount from '../screens/profileAccount';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();

function ProfileStackNavigation() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileAccount} options={{headerShown: false}}/>
        <Stack.Screen 
        name="EDIT PROFILE" 
        component={EditProfile} 
        options={{
            headerStyle: {
                height: 110
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: "center"
        }}/>
    </Stack.Navigator>
    )
}

export default ProfileStackNavigation