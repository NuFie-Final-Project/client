import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { TextField } from "react-native-material-textfield";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { LoginEmailPassword } from "../store/actions/user";
import {useSelector} from 'react-redux'
import ButtonLogin from "../components/buttonLoginRegis";
import Loading from '../components/loading'

export default function Login() {
  const load = useSelector(state => state.user.loading)
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    dispatch({
      type: "SET_USERDATA",
      val: { email, password, firstName: null, lastName: null }
    });
    dispatch(LoginEmailPassword({ email, password }));
    // navigation.navigate("MainPage")
  };
  const handleEmail = prop => {
    setEmail(prop.nativeEvent.text);
  };

  const handlePassword = prop => {
    setPassword(prop.nativeEvent.text);
  };
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg-login.jpg")}
          style={styles.bgImage}
        >
          <Image
            source={require("../../assets/homelogo.png")}
            style={{ width: 250, height: 80, margin: 40 }}
          />
          <View style={styles.cardLogin}>
            <Text style={styles.titleLogin}>LOGIN</Text>
            <View style={styles.form}>
              <TextField label="Email" onChange={handleEmail} />
            </View>
            <View style={styles.form}>
              <TextField
                label="Password"
                onChange={handlePassword}
                secureTextEntry={true}
              />
            </View>
            {
              load ? <Loading/> :
              <ButtonLogin
                handle={handleLogin}
                color="#0096FE"
                textColor="#fff"
              />
            }
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Sign in With Social Network</Text>
            <View style={styles.wrapperSocial}>
              <View
                style={[
                  styles.socialLogo,
                  { backgroundColor: "#4267B2", marginRight: 10 }
                ]}
              >
                <FontAwesome name="facebook" size={18} color="#fff" />
              </View>
              <View style={[styles.socialLogo, { backgroundColor: "#DD3C2A" }]}>
                <FontAwesome name="google" size={18} color="#fff" />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "90%",
    marginBottom: 10
  },
  titleLogin: {
    paddingHorizontal: 30,
    fontWeight: "700",
    fontSize: 24
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  cardLogin: {
    width: "85%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16
  },
  socialLogo: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#c1c1c1",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapperSocial: {
    flexDirection: "row",
    justifyContent: "center"
  },
  footer: {
    position: "absolute",
    bottom: 20
  },
  footerText: {
    color: "#fff",
    marginBottom: 10
  }
});
