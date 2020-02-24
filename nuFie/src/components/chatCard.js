import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'

export default function ChatCard(props) {
    const id = useSelector(state => state.user.login)
    const owner = () => {
        if(props.message.owner == id){
            return 'row-reverse'
        } else {
            return 'row'
        }
    }
    return (
        <View style={[style.container, {flexDirection: owner()}]}>
            <Image 
                source={{uri: props.message.profile}}
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
