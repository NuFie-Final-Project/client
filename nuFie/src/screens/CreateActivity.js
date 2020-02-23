import React, { useState } from 'react';
import { Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import PostActivityForm from '../components/PostActivityForm';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as ImagePicker from 'expo-image-picker';


function createActivity({ route }) {
    const [ showAlert, setShowAlert ] = useState(false);
    const [ uploadImage, setUploadImage ] = useState('');

    const openAlert = (object) => {
        setShowAlert(object.showAlert)
    }

    const postImageWithCamera = async () => {
        setShowAlert(false);
        const permissionStatus = await ImagePicker.getCameraPermissionsAsync();
        let result;
        if(!permissionStatus.granted) {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if(status === 'granted') {
                result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: true
                }) 
            }
        } else {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            }) 
        }
        if(!result.cancelled) {
            setUploadImage(result);
        }
    }

    const postingImageWithGallery = async () => {
        setShowAlert(false);
        const permissionStatus = await ImagePicker.getCameraRollPermissionsAsync();
        let result;
        if(!permissionStatus.granted) {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if(status === 'granted') {
                result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: true
                }) 
            }
        } else {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            }) 
        }
        if(!result.cancelled) {
            setUploadImage(result);
        }
    }

    return (
        <ScrollView>
            <PostActivityForm 
            route={route} 
            openAlert={openAlert} 
            uploadImage={uploadImage}></PostActivityForm>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Choose Your Method"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Camera"
                confirmText="Gallery"
                confirmButtonColor="#DD6B55"
                onCancelPressed={postImageWithCamera}
                onConfirmPressed={postingImageWithGallery}
                onDismiss={() => {setShowAlert(false)}}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default createActivity