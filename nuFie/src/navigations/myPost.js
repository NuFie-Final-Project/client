import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPost from '../screens/myPost'
import DetailMyPost from '../screens/detailPost'
import ChatRoom from '../screens/chattingRoom'
import CreateActivity from '../screens/CreateActivity';
import EditActivity from '../screens/EditActivity';
import SearchFriend from '../screens/FindFriends'


export default function StackMyPost() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyPost" component={MyPost} />
            <Stack.Screen name="DetailMyPost" component={DetailMyPost} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="SearchFriend" component={SearchFriend} />
            <Stack.Screen 
            name="ADD POST" 
            component={CreateActivity} 
            options={{
                headerStyle: {
                    height: 110
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: "center"
            }}/>
            <Stack.Screen 
            name="EDIT POST" 
            component={EditActivity}/>
        </Stack.Navigator>
    )
    
}