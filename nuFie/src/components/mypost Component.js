import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function MyPost() {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('DetailMyPost')
    }
    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <View style={style.container}>
                <View>
                    <Image
                        style={style.image}
                        source={require('../../assets/icon.png')}
                    />
                </View>
                <View style={style.information}>
                    <Text style={style.title}>This is Little of Interest</Text>
                    <Text style={style.content}>Sunday, 12 march 2020</Text>
                    <Text style={style.content}>Cinemax 21 Pondok Indah</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        height: 100,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    image:{
        width: 70,
        height: 70
    },
    information:{
        marginLeft: 15
    },
    title: {
        fontSize: 20
    }
})