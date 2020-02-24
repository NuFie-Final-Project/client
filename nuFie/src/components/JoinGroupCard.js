import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function JoinGroupCard(props) {

    const navigation = useNavigation();

    const activity = props.activity;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('DETAIL JOIN', { activity: activity })}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text>{new Date(activity.due_date).toDateString()}</Text>
                <Text>{activity.location}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    }
})

export default JoinGroupCard;