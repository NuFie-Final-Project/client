import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MyPost() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("DetailMyPost", { activity: props.activity });
  };
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Need Friends for Watching Concert</Text>
          <Text style={styles.date}>Sunday, 29 February 2020</Text>
          <Text style={styles.place}>JIEXPO Kemayoran,Jakarta</Text>
        </View>
        <View style={styles.badge}>
          <Ionicons name="ios-people" size={28} color="#fff" />
          <Text style={{ marginLeft: 8, fontWeight: "700", color: "#fff" }}>
            2
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "97%",
    height: 75,
    marginBottom: 10,
    elevation: 2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8
  },
  textWrapper: {
    width: "79%"
  },
  title: {
    fontSize: 14,
    fontWeight: "700"
  },
  badge: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#3282b8",
    backgroundColor: "#3282b8",
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8
  },
  place: {
    fontSize: 11,
    color: "#939393"
  },
  date: {
    fontSize: 11,
    color: "#939393"
  }
});
