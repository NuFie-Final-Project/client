import React from 'react'
import IntroSlider from "./intro"
import { useNavigation } from '@react-navigation/native'

export default function Intro() {
    const navigation = useNavigation()
    const changeStateShow = () => {
        navigation.navigate('Home')
    } 
    return (
      <IntroSlider done={changeStateShow} />
    )
}