import React, { useState, useEffect } from 'react';
import { 
    ScrollView, 
    StyleSheet, 
} from 'react-native';
import Constants from 'expo-constants';
import FriendCard from '../components/FriendCard'
import {FindFriend} from '../store/actions/user'
import {useDispatch, useSelector} from 'react-redux'


function FindFriends(props) {
    const detailPost = props.route.params.data 
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    useEffect(() => {
        dispatch(FindFriend(userData.token))
    },[])
    return (
        <ScrollView style={styles.container}>
            {
                userData.suggestFriend.map(el => <FriendCard key={el._id} detailPost={detailPost} data={el}/>)
            }
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