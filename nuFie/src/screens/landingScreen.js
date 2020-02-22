import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import BtnLogin from "../components/buttonLoginRegis";

const logoBrand = require("../../assets/logo.png");

export default function LandingScreen() {
  const navigation = useNavigation();
  const moveToLogin = () => {
    navigation.navigate("Login");
  };
  const moveToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <LinearGradient colors={["#3C8CE7", "#00EAFF"]} style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.wrapperText}>
          <View style={{ height: 150, width: 150 }}>
            <ImageBackground
              source={logoBrand}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </View>
        <View style={styles.wrapperButton}>
          <BtnLogin text="LOGIN" handle={moveToLogin} />
          <BtnLogin text="REGISTER" handle={moveToRegister} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50
  },
  wrapperText: {
    alignSelf: "center",
    justifyContent: "center"
  },
  wrapperButton: {
    width: "90%",
    alignItems: "center"
  },
  titleWelcome: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center"
  }
});
