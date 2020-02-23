import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import EditProfileForm from '../components/EditProfileForm';
import {useSelector} from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import {UpdateProfile} from '../store/actions/user'
import {useDispatch} from 'react-redux'


function EditProfile(props) {
    const dispatch = useDispatch()
    const [picture, setPicture] = useState('kk')
    const biodata = useSelector(state => state.user.biodata)
    const defaultProfile = useSelector(state => state.user.profilePictureDefault)
    useEffect(() => {
        if(biodata.profilePicture == ''){
            setPicture(defaultProfile)
        } else {
            setPicture(biodata.profilePicture)
        }
    },[])
    const handleEdit = (dataEdited) => {
        let formData = new FormData()
        formData.append('firstName', dataEdited.firstName)
        formData.append('lastName', dataEdited.lastName)
        formData.append('interests', dataEdited.tags)
        formData.append('aboutMe', dataEdited.aboutMe)
        formData.append('phoneNumber', dataEdited.phone)
        formData.append('gender', dataEdited.gender)
        formData.append('image', {
            uri: picture,
            type: 'image/jpg',
            name: 'profilePicture'
        })
        dispatch(UpdateProfile(formData))
        
    }
    const postImageWithCamera = async () => {
        const permissionStatus = await ImagePicker.getCameraPermissionsAsync();
        if(!permissionStatus.granted) {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if(status === 'granted') {
                const result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: true
                }) 
            }
        } else {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            }) 
            if(!result.cancelled) {
                setPicture(result.uri)
            }
        }
    }

    const postingImageWithGallery = async () => {
        const permissionStatus = await ImagePicker.getCameraRollPermissionsAsync();
        if(!permissionStatus.granted) {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if(status === 'granted') {
                const result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: true
                }) 
            }
        } else {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            }) 
            if(!result.cancelled) {
                setPicture(result.uri);
            }
        }
    }
    return(
        <ScrollView style={{flex: 1}}>
            <View style={styles.profilePictureContainer}>
                <Image source={{uri: picture}} style={styles.profilePicture}/>
                <TouchableOpacity onPress={postingImageWithGallery}>
                    <Text style={styles.profilePictureText}>Change Picture</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <EditProfileForm handleEdit={handleEdit}></EditProfileForm>
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