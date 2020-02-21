import React, { useState } from "react";
import store from "./src/store/index";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroSlider from "./src/screens/intro";
import LandingScreen from "./src/screens/landingScreen";
import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/register";
import Home from "./src/navigations/tabNavigation";

// import MyPost from "./src/screens/myPost";

export default function App() {
  const [showApp, setShowApp] = useState(false);
  const changeStateShow = () => {
    setShowApp("true");
  };
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      {!showApp ? (
        <IntroSlider done={changeStateShow} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainPage" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
}
