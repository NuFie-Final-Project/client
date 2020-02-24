import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function FeedsItem() {
  return (
    <View style={styles.cardFeed}>
      <View style={styles.cardHeader}>
        <Image
          source={require("../../assets/edit_profile_dummy.jpg")}
          style={styles.profpict}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: "700" }}>Camila Jansen</Text>
          <Text style={{ fontSize: 10, color: "#777777" }}>
            Sun, 02 Maret 2020
          </Text>
        </View>
        <TouchableHighlight style={styles.btnDetail}>
          <Text style={{ color: "#fff", fontSize: 12 }}>View Detail</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.cardImage}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/konser.jpg")}
        />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>Need Friends for Watching Concert</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="place" color="#777777" />
          <Text style={styles.place}>JIEXPO Kemayoran, Jakarta</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="calendar" color="#777777" />
          <Text style={styles.date}>Sunday, 29 March 2020</Text>
        </View>
      </View>
    </View>
    // <View style={styles.card}>
    //   <View></View>
    //   <View style={styles.footer}>
    //     <View style={styles.footerText}>
    //       <Text>This is title of Interest</Text>
    //       <Text>Sunday, 01 March 2020</Text>
    //       <Text>CinemaXXI Pondok Indah Mall</Text>
    //     </View>
    //     <View>
    //       <View style={styles.userPhoto}></View>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  cardFeed: {
    height: 330,
    width: Dimensions.get("window").width,
    // borderWidth: 1,
    // borderColor: "#c2c2c2",
    backgroundColor: "#fff",
    marginBottom: 12,
    paddingVertical: 4
  },
  cardHeader: {
    flexDirection: "row",
    marginBottom: 6
  },
  profpict: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 8,
    marginRight: 4
  },
  cardImage: {
    height: 220,
    width: "100%",
    backgroundColor: "#f00"
  },
  cardText: {
    paddingHorizontal: 8
  },
  cardTitle: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: 3
  },
  date: {
    fontSize: 11,
    color: "#777777",
    marginLeft: 4
  },
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
  },
  place: {
    fontSize: 10,
    color: "#777777",
    marginLeft: 4
  },
  btnDetail: {
    position: "absolute",
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: "#01B8E7",
    borderColor: "#01B8E7",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    right: 15
  }
});
