import React, { useState } from 'react';
import { Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import PostActivityForm from '../components/PostActivityForm';

function createActivity({ route }) {
    return (
        <ScrollView style={styles.container}>
            <PostActivityForm route={route}></PostActivityForm>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default createActivity