import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function JoinGroupCard(props) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>This Title Of Interest</Text>
            <Text>Saturday, 22 February 2020</Text>
            <Text>Pondok Indah Mall</Text>
        </View>
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