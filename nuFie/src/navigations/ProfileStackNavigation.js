<<<<<<< HEAD
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileAccount from "../screens/profileAccount";
import EditProfile from "../screens/EditProfile";
import ListJoinGroup from "../screens/ListJoinGroup";
import DetailJoin from "../screens/detailJoin";
import ChatRoom from "../screens/chattingRoom";
=======
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileAccount from '../screens/profileAccount';
import EditProfile from '../screens/EditProfile';
import ListJoinGroup from '../screens/ListJoinGroup';
import DetailJoin from '../screens/detailJoin';
import ChatRoom from '../screens/chattingRoom'
import DetailMember from '../screens/DetailMember';
import DetailProfile from '../screens/ProfileMember'
>>>>>>> 80% Bug done

const Stack = createStackNavigator();

function ProfileStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EDIT PROFILE"
        component={EditProfile}
        options={{
<<<<<<< HEAD
          headerStyle: {
            height: 110
          },
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen name="LIST JOIN GROUP" component={ListJoinGroup} />
      <Stack.Screen name="DETAIL JOIN" component={DetailJoin} />
      <Stack.Screen name="ChatRoomFromMember" component={ChatRoom} />
=======
            headerStyle: {
                height: 110
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: "center"
        }}/>
        <Stack.Screen name="LIST JOIN GROUP"
        component={ListJoinGroup}/>
        <Stack.Screen name="DETAIL JOIN" component={DetailJoin} />
        <Stack.Screen name="DETAILJOINMEMBER" component={DetailMember} />
        <Stack.Screen name="DetailMember" component={DetailProfile} />
        <Stack.Screen name="ChatRoomFromMember" component={ChatRoom} />
>>>>>>> 80% Bug done
    </Stack.Navigator>
  );
}

export default ProfileStackNavigation;
