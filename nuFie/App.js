import React, { useState, useEffect } from "react";
import store from "./src/store/index";
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LandingScreen from "./src/screens/landingScreen"
import LoginScreen from "./src/screens/login"
import RegisterScreen from "./src/screens/register"
import Home from "./src/navigations/tabNavigation"
import Intro from './src/screens/introStart'
import {Notifications} from 'expo'

export default function App() {
  const [notification, setNotification] = useState({})
  console.log('==============ini push notif', notification)
  const handleNotification = (notif) => {
    setNotification(notif)
  }
  useEffect(() => {
    _notificationSubscription = Notifications.addListener(handleNotification)
  },[])
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainPage" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
