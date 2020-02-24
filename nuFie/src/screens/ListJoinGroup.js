import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import JoinGroupCard from '../components/JoinGroupCard';
import { getActivities } from '../store/actions/Activity';

function ListJoinGroup({ route }) {

    const listJoin = useSelector(state => state.activity);
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('use Effect JAlan')
        dispatch(getActivities());
        setLoading(true);
    }, []);

    if(!loading) {
        return null
    }

    const renderListJoinCard = () => {
        if(listJoin.listJoin.length === 0) {
            return <Text>You haven't join any activities</Text>
        } else {
            return listJoin.listJoin.map(activity => {
                return <JoinGroupCard key={activity._id} activity={activity}></JoinGroupCard>
            })
        }
    }

    return (
        <ScrollView>
            <View style={styles.listCardContainer}>
                {renderListJoinCard()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listCardContainer: {
        padding: 10
    }
})

export default ListJoinGroup;