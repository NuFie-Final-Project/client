import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Post from '../components/mypost Component'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyPost() {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <ScrollView>
                <View>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </View>
            </ScrollView>
                <View style={style.floatWarper}>
                    <TouchableOpacity onPress={() => navigation.navigate('ADD POST')}>
                        <Text style={style.addPostIcon}>+</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20
    },
    addPostIcon:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    floatWarper:{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'grey',
        borderRadius: 40,
        position: 'absolute',
        left: '94%',
        top: 550,
        zIndex: 3
    }
})