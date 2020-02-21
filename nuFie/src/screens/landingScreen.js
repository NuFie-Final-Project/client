import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import BtnLogin from "../components/buttonLoginRegis";
import { useNavigation } from "@react-navigation/native";

export default function LandingScreen() {
  const navigation = useNavigation();
  const moveToLogin = () => {
    navigation.navigate("Login");
  };
  const moveToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <BtnLogin text="LOGIN" handle={moveToLogin} />
      <BtnLogin text="REGISTER" handle={moveToRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#c1c1c1",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50
  }
});
