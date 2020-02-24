import React, { useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import JoinGroupCard from '../components/JoinGroupCard';

function ListJoinGroup({ route }) {
    return (
        <ScrollView>
            <View style={styles.listCardContainer}>
                <JoinGroupCard></JoinGroupCard>
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