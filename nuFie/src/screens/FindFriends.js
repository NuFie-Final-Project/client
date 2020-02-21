import React, { useState } from 'react';
import { 
    ScrollView, 
    StyleSheet, 
} from 'react-native';
import Constants from 'expo-constants';
import FriendCard from '../components/FriendCard';

function FindFriends(props) {
    return (
        <ScrollView style={styles.container}>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    friendsContainer: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 12,
        alignItems: 'center', 
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        width: '75%'
    },
    rightContainer: {
        width: '25%'
    },
    contactImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 15
    },
    contactText: {
        fontSize: 18,
        marginRight: 50,
        fontWeight: 'bold'
    },
    buttonInvite: {
        paddingVertical: 4,
        backgroundColor: '#C4C4C4',
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})

export default FindFriends;