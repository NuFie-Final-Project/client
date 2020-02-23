import React, { useEffect } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Post from '../components/mypost Component'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getActivities } from '../store/actions/Activity';
import { useSelector, useDispatch } from 'react-redux';

export default function MyPost() {
    const navigation = useNavigation();
    const activities = useSelector(state => state.activity);
    const trigger = useSelector(state => state.other.trigger);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities({token: user.token, id: user.login}))
    }, [trigger]);

    return (
        <View style={style.container}>
            <ScrollView>
                <View>
                    {
                        activities.data.length === 0
                        ?   <Text>Fetching data, Please Wait....</Text>
                        :   activities.data.map(activity => {
                                return <Post key={activity._id} activity={activity}/>
                            })
                    }
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