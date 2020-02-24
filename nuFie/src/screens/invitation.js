import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import InvitationCard from '../components/invitationCard'
import {useSelector} from 'react-redux'

export default function Invitation() {
    const InvitationList = useSelector(state => state.user.invitation)
    return (
        <View style={style.container}>
            {
                InvitationList.map(el => <InvitationCard key={el._id} data={el}/>)
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})