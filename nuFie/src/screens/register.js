import React, {useState, useEffect} from "react"
import { Text, View, StyleSheet } from "react-native"
import { TextField } from "react-native-material-textfield"
import Constants from "expo-constants"
import BtnRegister from "../components/buttonLoginRegis"
import { useNavigation } from "@react-navigation/native"
import {RegisterAction} from '../store/actions/user'
import {useSelector, useDispatch} from 'react-redux'
import Load from '../components/loading'

export default function Register() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.user.loading)
  const user = useSelector(state => state.user.login)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  useEffect(() => {
    if(user){
      navigation.navigate("MainPage")
    }
  },[user])

  const handleFirstName = (event) => {
    setFirstName(event.nativeEvent.text)
  }
  const handleLastName = (event) => {
    setLastName(event.nativeEvent.text)
  }
  const handleEmail = (event) => {
    setEmail(event.nativeEvent.text)
  }
  const handlePassword = (event) => {
    setPassword(event.nativeEvent.text)
  }
  const handleRegister = () => {
    dispatch({type: 'SET_USERDATA', val: {email, password,firstName,lastName}})
    dispatch(RegisterAction({email,password}))
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleRegister}>Create New Account</Text>
      <View style={styles.formWrapper}>
        <TextField label="First Name" onChange={handleFirstName} disabled={loading}/>
      </View>
      <View style={styles.formWrapper}>
        <TextField label="Last Name" onChange={handleLastName} disabled={loading}/>
      </View>
      <View style={styles.formWrapper}>
        <TextField label="Email" onChange={handleEmail} disabled={loading}/>
      </View>
      <View style={styles.formWrapper}>
        <TextField label="Password" onChange={handlePassword} disabled={loading}/>
      </View>
      {
        loading ? <Load/> : <BtnRegister text="REGISTER" color="#4dca44" handle={handleRegister} />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1
  },
  titleRegister: {
    alignSelf: "flex-start",
    paddingLeft: 30,
    marginBottom: 8
  },
  formWrapper: {
    width: "85%"
  }
});
