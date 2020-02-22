import React from "react";
import Constants from "expo-constants";
import { View, Text, StyleSheet } from "react-native";
import Category from "../components/InterestCategory";
import SearchBar from "../components/searchBar";

export default function SearchInterest() {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Browse Interest</Text>
      <SearchBar />
      <View style={styles.categoryWrapper}>
        <Category text="Music" />
        <Category text="Movie" />
        <Category text="Sports" />
        <Category text="Traveling" />
        <Category text="Food" />
        <Category text="Others" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 4
  },
  titlePage: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20
  },
  categoryWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});
