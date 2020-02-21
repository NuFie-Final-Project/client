import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>NuFie</Text>
        <View style={{ alignSelf: "flex-end" }}>
          <Ionicons name="md-notifications" size={28} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexGrow: 1
  },
  navbar: {
    height: 50,
    backgroundColor: "#ff0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
