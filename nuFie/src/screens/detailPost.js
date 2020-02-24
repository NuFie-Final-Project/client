import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import CountMember from "../components/memberCount";
import ButtonP from "../components/ButtonOnPost";
import { useNavigation } from "@react-navigation/native";

export default function DetailPost({ route }) {
  const navigation = useNavigation();
  const handleGroupChat = () => {
    navigation.navigate("ChatRoom", {roomId: activity._id});
  };

  const activity = route.params.activity;

  const handleSearchFriend = () => {
    navigation.navigate("SearchFriend", { data: activity });
  };

  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View style={styles.container}>
        <Image source={{ uri: activity.image }} style={styles.imageActivity} />
        <View style={styles.textWrapper}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.titleActivity}>{activity.title}</Text>
              <View style={{ flexDirection: "row", marginBottom: 3 }}>
                <MaterialIcons name="place" color="#777777" size={13} />
                <Text style={styles.place}>
                  {activity.location}, {activity.address}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome name="calendar" color="#777777" size={13} />
                <Text style={styles.date}>
                  {" "}
                  {new Date(activity.due_date).toDateString()}
                </Text>
              </View>
            </View>
            <View style={styles.badgeWrapper}>
              <Ionicons name="ios-people" size={28} color="#fff" />
              <Text style={{ marginLeft: 6, fontWeight: "700", color: "#fff" }}>
                {activity.members.length}/{activity.memberLimit}
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 12,
              fontWeight: "700",
              fontSize: 16
            }}
          >
            Activity Description
          </Text>
          <Text style={styles.description}>{activity.description}</Text>
          <View style={styles.buttonWrap}>
            <ButtonP
              color="#27aa80"
              text="Open Group Chat"
              icon="ios-chatboxes"
              iconColor="#fff"
              handle={handleGroupChat}
            />
            <ButtonP
              text="Search Friend"
              color="#0c99c1"
              icon="md-search"
              handle={handleSearchFriend}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff"
  },
  imageActivity: {
    height: 200,
    width: Dimensions.get("window").width
  },
  textWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  titleActivity: {
    fontSize: 21,
    fontWeight: "700"
  },
  date: {
    fontSize: 11,
    color: "#777777",
    marginLeft: 6
  },
  place: {
    fontSize: 11,
    color: "#777777",
    marginLeft: 6
  },
  description: {
    color: "#3a3a3a",
    textAlign: "justify",
    marginBottom: 25
  },
  badgeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    backgroundColor: "#f45905",
    paddingHorizontal: 12,
    borderRadius: 10
  },
  buttonWrap: {
    alignItems: "center"
  }
});
