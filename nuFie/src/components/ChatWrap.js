import React, {useEffect} from 'react'
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native'
import Chat from './chatCard'
import db from '../../config/config_firebase'

export default function ChatWrap(props) {
    useEffect(() => {
        db.firestore().collection('chat').doc(props.roomId).onSnapshot(function(doc) {
            
        })
    },[])
    const arrMessage = [
        {
            message: 'haaaaai',
            ownerId: 1,
            id: 2
        },
        {
            message: 'besok Ketemu jam brp?',
            ownerId: 2,
            id: 3
        },
        {
            message: 'jam 8 ya?',
            ownerId: 3,
            id: 4
        },
        {
            message: 'Oke sdjskdjsdjsdsdsdsdjshdhjsdjhdshdjsd',
            ownerId: 1,
            id: 5
        },
        {
            message: 'besok Ketemu jam brp?',
            ownerId: 2,
            id: 6
        },
        {
            message: 'besok Ketemu jam brp?',
            ownerId: 2,
            id: 7
        },
        {
            message: 'besok Ketemu jam brp?',
            ownerId: 2,
            id: 8
        },
        {
            message: 'besok Ketemu jam brp?',
            ownerId: 2,
            id: 9
        },
        {
            message: 'besok Ketemu jam brp? jangan telat ya',
            ownerId: 2,
            id: 10
        },
        {
            message: 'besok Ketemu jam brp? jangan telat ya',
            ownerId: 2,
            id: 11
        },
        {
            message: 'besok Ketemu jam brp? jangan telat ya',
            ownerId: 2,
            id: 12
        }
    ]
    return (
        // <ScrollView>
            <View style={style.container}>
                {
                    arrMessage.map(el => <Chat key={el.id} message={el}/>)
                }  
            </View>
        // </ScrollView>
    )
    
}

const style = StyleSheet.create({
    container: {
    }   
})

