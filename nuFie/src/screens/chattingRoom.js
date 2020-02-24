import React from 'react'
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import InputChat from '../components/ChatInput'
import Chat from '../components/ChatWrap'
import db from '../../config/config_firebase'


export default function ChatRoom (props) {
    const dataUser = useSelector(state => state.user)
    const roomId = props.route.params.roomId
    const handleSend = (event) => {
        const message = {
            message: event,
            owner: dataUser.login,
            profile: dataUser.biodata.profilePicture,
            createdAt: new Date()
        }
        db.firestore()
            .collection('chat')
            .doc(roomId)
            .collection('arrMessage')
            .add(message)
            .then((data) => {
                console.log('berhasil add')
            })

    }
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.scroll}>
                    <Chat roomId={roomId}/>
                </View>
            </ScrollView>
            <View style={style.float}>
                <InputChat handle={handleSend}/>
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        padding: 20
    },
    float:{
        position: 'absolute',
        top: Dimensions.get('window').height-180,
        left: 10,
        backgroundColor: 'white',
        borderRadius: 20
    },
    scroll:{
        height: '90%'
    }
})