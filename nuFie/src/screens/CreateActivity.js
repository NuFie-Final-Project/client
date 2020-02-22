import React, { useState } from 'react';
import { Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import PostActivityForm from '../components/PostActivityForm';

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
    }
})

export default createActivity