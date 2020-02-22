import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import editProfileDummy from '../../assets/edit_profile_dummy.jpg';
import EditProfileForm from '../components/EditProfileForm';

function EditProfile(props) {
    return(
        <ScrollView style={{flex: 1}}>
            <View style={styles.profilePictureContainer}>
                <Image source={editProfileDummy} style={styles.profilePicture}/>
                <Text style={styles.profilePictureText}>Change Picture</Text>
            </View>
            <View style={styles.formContainer}>
                <EditProfileForm></EditProfileForm>
            </View>
        </ScrollView>
    )
}   

const styles = StyleSheet.create({
    profilePictureContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    profilePictureText: {
        marginTop: 7,
        fontWeight: 'bold'
    },
    formContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
    }
})

export default EditProfile;