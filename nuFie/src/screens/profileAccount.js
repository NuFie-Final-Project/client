import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native'
import {Foundation} from '@expo/vector-icons'
import Btn from '../components/ButtonOnPost'
import { useNavigation } from '@react-navigation/native'
import {Logout} from '../store/actions/user'
import {useDispatch, useSelector} from 'react-redux'
import {ReadSelf} from '../store/actions/user'

export default function ProfileUser(params) {
    const loading = useSelector(state => state.user.loading)
    const biodata = useSelector(state => state.user.biodata)
    const defaultProfile = useSelector(state => state.user.profilePictureDefault)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const handleEdit  = () => {
        navigation.navigate('EDIT PROFILE')
    }
    const handleLogout = () => {
        dispatch(Logout())
    }

    const handleListJoinGroup = () => {
        navigation.navigate('LIST JOIN GROUP')
    }

    const simbol = () => {
        const gen = biodata.gender
        if(gen == undefined) {
            return 'male-symbol'
        }
            return  gen.toLowerCase() + '-symbol'
    }
    useEffect(() => {
        dispatch(ReadSelf())
    },[])
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
                        source={{uri: biodata.profilePicture  || defaultProfile}}
                        style={style.profile} 
                    />
                </View>
                <View style={style.nameWrap}>
                    <Text style={style.name}>{biodata.firstName} {biodata.lastName}</Text>
                    <Foundation name={simbol()} style={style.icon}/>
                </View>
                <View style={style.aboutMe}>
                    <Text style={[style.title, style.aboutMeText]}>About Me</Text>
                    <Text style={style.aboutMeText}>
                        {biodata.aboutMe}
                    </Text>
                </View>
                <View style={style.btnWrap}>
                    <Btn text="LIST JOIN GROUP" handle={handleListJoinGroup}/>
                    <Btn text="EDIT PROFILE" handle={handleEdit}/>
                    <Btn text="LOGOUT" handle={handleLogout}/>
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
        marginTop: 40,
        height: 150
    },
    aboutMeText: {
        textAlign: 'center'
    },
    btnWrap: {
        position: 'relative',
        top: Dimensions.get('window').height/8
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