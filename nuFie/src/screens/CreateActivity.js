import React from 'react';
import { Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import PostActivityForm from '../components/PostActivityForm';
import Constants from 'expo-constants';

function createActivity() {
    return (
        <ScrollView style={styles.container}>
            <PostActivityForm></PostActivityForm>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
})

export default createActivity