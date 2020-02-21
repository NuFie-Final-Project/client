import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export default function ChatCard(props) {
    const id = 1
    const owner = () => {
        if(props.message.ownerId == id){
            return 'row-reverse'
        } else {
            return 'row'
        }
    }
    return (
        <View style={[style.container, {flexDirection: owner()}]}>
            <Image 
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={style.profile} 
            />
            <View>
                <Text style={style.text}>
                    {props.message.message}
                </Text>
            </View>
        </View>
    )
    
}


const style = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    container: {
        marginBottom: 10
    },
    text: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 10,
        width: 220,
        color: 'white'
    }
})
