import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native'
import {Foundation} from '@expo/vector-icons'
import Btn from '../components/ButtonOnPost'
export default function ProfileUser(params) {
    return (
        <View style={style.container}>
            <ImageBackground 
                style={style.backGround}
                source={{uri: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg'}}
            >
                <View style={style.titleWrap}>
                    <Text style={style.title}>PROFILE</Text>
                </View>
            </ImageBackground>
            <View style={style.information}>
                <View>
                    <Image 
                        source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                        style={style.profile} 
                    />
                </View>
                <View style={style.nameWrap}>
                    <Text style={style.name}>Alex Murphy</Text>
                    <Foundation name="male-symbol" style={style.icon}/>
                </View>
                <View style={style.aboutMe}>
                    <Text style={style.aboutMeText}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </Text>
                </View>
                <View style={style.btnWrap}>
                    <Btn text="EDIT PROFILE"/>
                    <Btn text="LOGOUT"/>
                </View>
            </View>
        </View>
    )
    
}

const style = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    profile:{
        width: 120,
        height: 120,
        borderRadius: 20,
        marginTop: -50
    },
    backGround: {
        width: Dimensions.get('window').width,
        height: 200
    },
    information: {
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        marginTop: -25,
        height: '100%'
    },
    name: {
        fontSize: 20,
        fontWeight:'bold'
    },
    icon: {
        fontSize: 25,
        marginLeft: 8
    },
    nameWrap: {
        flexDirection: 'row',
        marginTop: 10
    },
    aboutMe: {
        width: 300,
        marginTop: 40
    },
    aboutMeText: {
        textAlign: 'center'
    },
    btnWrap: {
        position: 'relative',
        top: Dimensions.get('window').height/5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    }
})