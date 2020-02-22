import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import PostActivityForm from '../components/PostActivityForm';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as ImagePicker from 'expo-image-picker';

function EditActivity({ route }) {
    const [ showAlert, setShowAlert ] = useState(false);
    const [ uploadImage, setUploadImage ] = useState('');

    const openAlert = (object) => {
        setShowAlert(object.showAlert)
    }

    const postImageWithCamera = async () => {
        setShowAlert(false);
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
                setUploadImage(result.uri);
            }
        }
    }

    const postingImageWithGallery = async () => {
        setShowAlert(false);
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
                setUploadImage(result.uri);
            }
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

})

export default EditActivity;