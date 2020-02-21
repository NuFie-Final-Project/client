import React from 'react'
import {View, Dimensions,TextInput, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function ChatInput(params) {
    return (
        <View style={style.inputWrap}>
            <TextInput
                style={style.input}
                multiline={true}
                placeholder='Message'
            />
            <FontAwesome name="send" style={style.icon}/>
        </View>
    )
    
}

const style = StyleSheet.create({
    input: {
        height: '100%',
        width: '90%'
    },
    inputWrap: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        width: Dimensions.get('window').width-20,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        borderRadius: 20,
        minHeight: 50,
        maxHeight: 70
    },
    icon: {
        fontSize: 20
    },
})