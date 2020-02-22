import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function ButtonOnPost(prop) {
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => {navigation.navigate('EDIT PROFILE')}}>
            <View style={style.container}>
                <Text style={style.text}>{prop.text}</Text>
            </View>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: 40,
        justifyContent: 'center',
        width: 150,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 15
    }
})