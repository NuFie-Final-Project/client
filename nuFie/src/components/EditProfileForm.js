import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae, Akira } from 'react-native-textinput-effects';
import { TouchableOpacity } from 'react-native-gesture-handler';

function EditProfileForm(props) {
    const [ firstName, setFirstName ] = useState('Emily');
    const [ lastName, setLastName ] = useState('Ratajkowski');
    const [ aboutMe, setAboutMe ] = useState(`Emily O'Hara Ratajkowski is an American model and actress. Born in London and raised in San Diego, Ratajkowski rose to prominence in 2013, after appearing in the music video for Robin Thicke's "Blurred Lines", which became the number-one song of the year in several countries.`);
    const [ phone, setPhone ] = useState('082311013043');

    return(
        <>
            <Sae
                label={'Email Address'}
                iconClass={FontAwesomeIcon}
                iconName={'pencil'}
                iconColor={'black'}
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCorrect={false}
                value={firstName}
                labelStyle={{color: 'black'}}
                inputStyle={{color: 'black'}}
                onChangeText={(value) => setFirstName(value)}
                style={{
                    marginBottom: 15
                }}
            />
            <Sae
                label={'Email Address'}
                iconClass={FontAwesomeIcon}
                iconName={'pencil'}
                iconColor={'black'}
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCorrect={false}
                value={lastName}
                labelStyle={{color: 'black'}}
                inputStyle={{color: 'black'}}
                onChangeText={(value) => setLastName(value)}
                style={{
                    marginBottom: 15
                }}
            />
            <Sae
                label={'Phone Number'}
                iconClass={FontAwesomeIcon}
                iconName={'pencil'}
                iconColor={'black'}
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCorrect={false}
                value={phone}
                labelStyle={{color: 'black'}}
                inputStyle={{color: 'black'}}
                onChangeText={(value) => setPhone(value)}
                style={{
                    marginBottom: 15
                }}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>About Me</Text>
            <TextInput style={{
                height: 200, 
                borderWidth: 2, 
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                fontSize: 15
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