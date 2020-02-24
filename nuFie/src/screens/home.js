import React, {useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import FeedsItem from "../components/FeedsItem";
import {useNavigation} from '@react-navigation/native'
import { getActivities } from '../store/actions/Activity';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const trigger = useSelector(state => state.other.trigger);
  const user = useSelector(state => state.user);
  const navigation = useNavigation()
  const handleNotif = () => {
    navigation.navigate('Invitation')
  }
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getActivities({token: user.token, id: user.login}))
  }, [trigger]);
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titleNavbar}>NuFie</Text>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={handleNotif}>
            <Ionicons name="ios-notifications" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.titleScreen}>Intereset Feeds</Text>
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
    paddingTop: Constants.statusBarHeight,
    height: "100%"
  },
  navbar: {
    height: 50,
    backgroundColor: "#ff0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  titleNavbar: {
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    flexGrow: 1
  },
  listWrapper: {
    alignItems: "center"
  },
  titleScreen: {
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 8,
    marginTop: 8
  },
  iconWrapper: {
    position: "absolute",
    right: 15
  }
});
