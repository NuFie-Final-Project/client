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
    navigation.navigate("ChatRoom");
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

    // <>
    //     <View style={style.editButtonContainer}>
    //         <TouchableOpacity
    //         style={{alignItems: 'flex-end'}}
    //         onPress={() => navigation.navigate('EDIT POST', {editActivity: activity})}>
    //             <View style={style.editButton}>
    //                 <Text>Edit Post</Text>
    //             </View>
    //         </TouchableOpacity>
    //     </View>
    //     <View style={style.container}>
    //         <View>
    //             <Image
    //                 source={{uri: activity.image}}
    //                 style={style.image}
    //             />
    //         </View>
    //         <ScrollView>
    //             <View style={style.scroll}>
    //                 <View style={style.content}>
    //                     <Text style={style.title}>{activity.title}</Text>
    //                     <Text style={style.description}>{activity.description}</Text>
    //                 </View>
    //                 <View style={style.content}>
    //                 <Text style={style.title}>Promo Detail:</Text>
    //                     <Text style={style.description}>Lorem pularised in the 1960s with the release of Letraset sheets cont</Text>
    //                 </View>
    //                 <View style={style.CountMember}>
    //                     <CountMember totalMember={activity.members.length}/>
    //                 </View>
    //                 <View style={style.buttonWrap}>
    //                     <ButtonP text="Open Group Chat" handle={handleGroupChat}/>
    //                     <ButtonP text="Search Friend" handle={handleSearchFriend}/>
    //                 </View>
    //             </View>
    //         </ScrollView>
    //     </View>
    // </>
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

  //   container: {
  //     paddingLeft: 30,
  //     paddingRight: 30,
  //     alignItems: "center",
  //     width: Dimensions.get("window").width
  //   },
  //   editButtonContainer: {
  //     width: Dimensions.get("window").width,
  //     marginVertical: 10,
  //     paddingRight: 15
  //   },
  //   editButton: {
  //     alignItems: "flex-end",
  //     justifyContent: "flex-end",
  //     borderWidth: 2,
  //     borderColor: "#C1C1C1",
  //     paddingVertical: 5,
  //     paddingHorizontal: 8,
  //     borderRadius: 10
  //   },
  //   image: {
  //     width: 340,
  //     height: 220,
  //     borderRadius: 20
  //   },
  //   content: {},
  //   title: {
  //     textAlign: "center",
  //     fontWeight: "bold",
  //     fontSize: 25,
  //     margin: 8
  //   },
  //   description: {
  //     textAlign: "center"
  //   },
  //   CountMember: {
  //     alignItems: "center",
  //     margin: 10
  //   },
  //   scroll: {
  //     height: Dimensions.get("window").height
  //   },
  //   buttonWrap: {
  //     alignItems: "center"
  //   },
});
