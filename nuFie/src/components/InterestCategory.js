import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default function InterestCategory(props) {
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor: props.color || "#f1f1" }]}
    >
      <Text style={styles.cardLabel}>{props.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "46%",
    marginVertical: 8,
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  cardLabel: {
    fontWeight: "700",
    fontSize: 18
  }
});
