import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonLogin from "../components/buttonLoginRegis";

export default function Login() {
  return (
    <View style={styles.container}>
      <ButtonLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
