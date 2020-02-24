import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import FeedsItem from "../components/FeedsItem";
import { useNavigation } from "@react-navigation/native";
import { getActivities } from "../store/actions/Activity";
import { useSelector, useDispatch } from "react-redux";


export default function Home() {
  const trigger = useSelector(state => state.other.trigger);
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const handleNotif = () => {
    navigation.navigate("Invitation");
  };
  const dispatch = useDispatch();

  console.log(user.biodata);

  useEffect(() => {
    dispatch(getActivities({ token: user.token, id: user.login }));
  }, [trigger]);
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <View style={styles.navbar}>
        <View style={styles.brandLogo}>
          <ImageBackground
            resizeMode="contain"
            source={require("../../assets/homelogo.png")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={handleNotif}>
              <Ionicons name="ios-notifications" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
      </View>
      <Text style={styles.titleScreen}>Recomendation Activity</Text>
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
    height: "100%"
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "#01B8E7"
  },
  brandLogo: {
    width: 90,
    marginLeft: 6
  },
  navbar: {
    height: 50,
    backgroundColor: "#01B8E7",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#01B8E7",
    borderBottomColor: "#c3c3c3"
  },
  titleNavbar: {
    fontWeight: "700",
    fontSize: 24,
    marginLeft: 10,
    flexGrow: 1
  },
  listWrapper: {
    alignItems: "center"
  },
  titleScreen: {
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 10
  },
  iconWrapper: {
    position: "absolute",
    right: 15
  }
});
