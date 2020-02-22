import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

function EditProfileForm(props) {
    const [ firstName, setFirstName ] = useState('Emily');
    const [ lastName, setLastName ] = useState('Ratajkowski');
    const [ aboutMe, setAboutMe ] = useState(`Emily O'Hara Ratajkowski is an American model and actress. Born in London and raised in San Diego, Ratajkowski rose to prominence in 2013, after appearing in the music video for Robin Thicke's "Blurred Lines", which became the number-one song of the year in several countries.`);
    const [ phone, setPhone ] = useState('+62');

    const inputPhone = (value) => {
        if(value[0] !== '+') {
            setPhone('+62' + value)
        } else {
            setPhone(value)
        }
    }

    return(
        <>
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>First Name</Text>
            <TextInput
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
            style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C1C1C1',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 10
            }}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>Last Name</Text>
            <TextInput
            value={lastName}
            onChangeText={(value) => setLastName(value)}
            style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C1C1C1',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 10
            }}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>Phone</Text>
            <TextInput
            value={phone}
            onChangeText={inputPhone}
            style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C1C1C1',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 10
            }}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>About Me</Text>
            <TextInput style={{
                height: 200, 
                borderWidth: 1, 
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                fontSize: 15,
                borderColor: '#C1C1C1'
            }}
            value={aboutMe}
            onChangeText={(value) => {setAboutMe(value)}}
            multiline={true}
            textAlignVertical="top"
            />
            <TouchableOpacity style={{marginVertical: 25}}>
                <View style={{
                alignItems: 'center',
                backgroundColor: '#C4C4C4', 
                paddingVertical: 13, 
                borderRadius: 10,}}>
                    <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold'}}>EDIT PROFILE</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default EditProfileForm