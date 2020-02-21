import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="MyPost"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-list-box" color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={28} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
