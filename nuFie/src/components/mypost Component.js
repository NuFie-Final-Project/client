import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function MyPost(props) {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('DetailMyPost', {activity: props.activity});
    }
    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <View style={style.container}>
                <View>
                    <Image
                        style={style.image}
                        source={{uri: props.activity.image}}
                    />
                </View>
                <View style={style.information}>
                    <Text style={style.title}>{props.activity.title}</Text>
                    <Text style={style.content}>{new Date(props.activity.due_date).toDateString()}</Text>
                    <Text style={style.content}>{props.activity.location}</Text>
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