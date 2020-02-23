import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Post from "../components/mypost Component";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getActivities } from "../store/actions/Activity";
import { useSelector, useDispatch } from "react-redux";

export default function MyPost() {
  const navigation = useNavigation();
  const activities = useSelector(state => state.activity);
  const trigger = useSelector(state => state.other.trigger);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities({ token: user.token, id: user.login }));
  }, [trigger]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          {activities.data.length === 0 ? (
            <Text>Fetching data, Please Wait....</Text>
          ) : (
            activities.data.map(activity => {
              return <Post key={activity._id} activity={activity} />;
            })
          )}
        </View>
      </ScrollView>
      <View style={styles.floatWarper}>
        <TouchableOpacity onPress={() => navigation.navigate("ADD POST")}>
          <Text style={styles.addPostIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: "100%"
  },
  container: {
    height: "100%",
    alignItems: "center",
    paddingVertical: 10
  },
  addPostIcon: {
    fontSize: 30,
    color: "white",
    padding: 0,
    margin: 0,
    fontWeight: "bold"
  },
  floatWarper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d80e4",
    borderRadius: 100,
    position: "absolute",
    zIndex: 3,
    bottom: 120,
    right: 15
  }
});
