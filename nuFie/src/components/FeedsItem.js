import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FeedsItem() {
  return (
    <View style={styles.card}>
      <View></View>
      <View style={styles.footer}>
        <View style={styles.footerText}>
          <Text>This is title of Interest</Text>
          <Text>Sunday, 01 March 2020</Text>
          <Text>CinemaXXI Pondok Indah Mall</Text>
        </View>
        <View>
          <View style={styles.userPhoto}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "93%",
    height: 220,
    justifyContent: "flex-end",
    backgroundColor: "#c1c1c1",
    marginVertical: 6,
    borderRadius: 20,
    overflow: "hidden"
  },
  footer: {
    backgroundColor: "#777777",
    height: "35%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  userPhoto: {
    backgroundColor: "#c1c1c1",
    height: "80%",
    width: 50,
    marginLeft: 60,
    marginVertical: 8,
    borderRadius: 10
  }
});
