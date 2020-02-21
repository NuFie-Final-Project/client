import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Post from '../components/mypost Component'

export default function MyPost() {
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
                <Text style={style.addPostIcon}>+</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: 100,
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
        top: 620,
    }
})