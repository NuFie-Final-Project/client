import React from 'react'
import {View, Text} from 'react-native'
import {useSelector} from 'react-redux'


export default function Home () {
    const user  = useSelector(state => state.user.login)
    return (
        <View>
            <Text>ini Home</Text>
        </View>
    )
}