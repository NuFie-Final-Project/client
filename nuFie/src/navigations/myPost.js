import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MyPost from "../screens/myPost";
import DetailMyPost from "../screens/detailPost";
import ChatRoom from "../screens/chattingRoom";
import CreateActivity from "../screens/CreateActivity";
import EditActivity from "../screens/EditActivity";
import { View, TouchableHighlight } from "react-native";
import FindFriend from "../screens/FindFriends";
import { useNavigation } from "@react-navigation/native";
import DetailMember from '../screens/DetailMember'
import DetailProfile from '../screens/ProfileMember'
import ListPending from '../screens/PendingRequest'

export default function StackMyPost({ route }) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("EDIT POST", {
      editActivity: route.state.routes[1].params.activity
    });
  };
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Activity"
        component={MyPost}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "700",
            color: "#fff"
          },
          headerStyle: {
            height: 110,
            backgroundColor: "#151965"
          }
        }}
      />
      <Stack.Screen
        name="Detail Post"
        component={DetailMyPost}
        options={{
          headerRight: () => (
            <TouchableHighlight
              style={{ marginRight: 18 }}
              onPress={handlePress}
            >
              <Ionicons name="md-more" size={28} />
            </TouchableHighlight>
          )
        }}
      />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen
        name="ADD POST"
        component={CreateActivity}
        options={{
          title: "Add New Activity",
          headerBackground: () => (
            <LinearGradient
              colors={["#09C6F9", "#045DE9"]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          ),
          headerStyle: {
            height: 110
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen name="EDIT POST" component={EditActivity} />
      <Stack.Screen name="MemberList" component={DetailMember} />
      <Stack.Screen name="DetailMember" component={DetailProfile} />
      <Stack.Screen name="PendingRequest" component={ListPending} />
      <Stack.Screen
        name="Search Friend"
        component={FindFriend}
        options={{
          headerBackground: () => (
            <LinearGradient
              colors={["#a13388", "#10356c"]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#f79c1d",
            height: 115
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "700",
            color: "#fff"
          },
          headerTintColor: "#fff"
        }}
      />
    </Stack.Navigator>
  );
}
