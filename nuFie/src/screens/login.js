import React, {useState} from "react"
import { View, Text, StyleSheet } from "react-native"
import ButtonLogin from "../components/buttonLoginRegis"
import { OutlinedTextField } from "react-native-material-textfield"
import { useNavigation } from "@react-navigation/native"
import {useDispatch} from 'react-redux'
import {LoginEmailPassword} from '../store/actions/user'
export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const handleLogin = () => {
    dispatch({type: 'SET_USERDATA', val: {email, password,firstName: null,lastName: null}})
    dispatch(LoginEmailPassword({email, password}))
    // navigation.navigate("MainPage")
  }
  const handleEmail = (prop) => {
    setEmail(prop.nativeEvent.text)
  }

  const handlePassword = (prop) => {
    setPassword(prop.nativeEvent.text)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleLogin}>Login To Your Account</Text>
      <View style={styles.form}>
        <OutlinedTextField label="Email" onChange={handleEmail}/>
      </View>
      <View style={styles.form}>
        <OutlinedTextField label="Password" onChange={handlePassword} />
      </View>
      <ButtonLogin handle={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "85%",
    marginBottom: 10
  },
  titleLogin: {
    paddingHorizontal: 30,
    alignSelf: "flex-start",
    marginBottom: 15
  }
});
