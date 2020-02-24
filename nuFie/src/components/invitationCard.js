import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Btn from './btnAcceptDecline'
import {useDispatch} from 'react-redux'
import {AcceptInvite} from '../store/actions/Activity'

export default function InvitationCard (props) {
    const dispatch = useDispatch()
    const handleAccept = () => {
        dispatch(AcceptInvite(props.data._id))
    }
    const handleDecline = () => {

    }
    return (
        <View style={style.container}>
            <View>
                <Image 
                    source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={style.profile} 
                />
            </View>
            <View style={style.right}>
                <View>
                    <Text style={style.name}>Jhon Mayer</Text>
                    <Text>Wants to join your activity</Text>
                </View>
                <View style={style.btnWrap}>
                    <Btn text="Accept" handle={handleAccept}/>
                    <Btn text="Decline" handle={handleDecline}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    container: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 10,
        width: 220,
        color: 'white'
    },
    btnWrap: {
        flexDirection: 'row',
        marginTop: 5
    },
    right: {
        marginLeft: 30
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
