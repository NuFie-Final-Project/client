import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import FeedsItem from "../components/FeedsItem";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titleNavbar}>NuFie</Text>
        <Ionicons name="ios-notifications" size={28} />
      </View>
      <Text style={styles.titleScreen}>Intereset Feeds</Text>
      <ScrollView>
        <View style={styles.listWrapper}>
          <FeedsItem />
          <FeedsItem />
          <FeedsItem />
          <FeedsItem />
          <FeedsItem />
          <FeedsItem />
          <FeedsItem />
        </View>
      </ScrollView>
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
  },
  titleNavbar: {
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    flexGrow: 1
  },
  listWrapper: {
    alignItems: "center",
    height: "100%"
  },
  titleScreen: {
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 8,
    marginTop: 8
  }
});
