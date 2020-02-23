import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useDispatch} from 'react-redux'
import {FetchCategory} from '../store/actions/Activity'

export default function InterestCategory(props) {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const handlePress = () => {
    dispatch(FetchCategory(props.text))
  }
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor: props.color || "#f1f1" }]}
      onPress={handlePress}
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
