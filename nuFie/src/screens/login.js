import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonLogin from "../components/buttonLoginRegis";
import { OutlinedTextField } from "react-native-material-textfield";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("MainPage");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleLogin}>Login To Your Account</Text>
      <View style={styles.form}>
        <OutlinedTextField label="Email" />
      </View>
      <View style={styles.form}>
        <OutlinedTextField label="Password" />
      </View>
      <ButtonLogin handle={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "85%",
    marginBottom: 10
  },
  titleLogin: {
    paddingHorizontal: 30,
    alignSelf: "flex-start",
    marginBottom: 15
  }
});
