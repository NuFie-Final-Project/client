import React from 'react'
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native'
import InputChat from '../components/ChatInput'
import Chat from '../components/ChatWrap'


export default function ChatRoom (props) {
    const roomId = props.route.params.roomId
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.scroll}>
                    <Chat roomId={roomId}/>
                </View>
            </ScrollView>
            <View style={style.float}>
                <InputChat/>
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