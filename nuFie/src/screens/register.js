import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextField } from "react-native-material-textfield";
import Constants from "expo-constants";
import BtnRegister from "../components/buttonLoginRegis";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("MainPage");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleRegister}>Crete New Account</Text>
      <View style={styles.formWrapper}>
        <TextField label="First Name" />
      </View>
      <View style={styles.formWrapper}>
        <TextField label="Last Name" />
      </View>
      <View style={styles.formWrapper}>
        <TextField label="Email" />
      </View>
      <View style={styles.formWrapper}>
        <TextField label="Password" />
      </View>
      <BtnRegister text="REGISTER" color="#4dca44" handle={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1
  },
  titleRegister: {
    alignSelf: "flex-start",
    paddingLeft: 30,
    marginBottom: 8
  },
  formWrapper: {
    width: "85%"
  }
});
