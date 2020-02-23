import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
import SelectPicker from 'react-native-form-select-picker';


function EditProfileForm(props) {
    const userData = useSelector(state => state.user.biodata)
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ aboutMe, setAboutMe ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ tags, setTags ] = useState([]);
    const [ tagText, setTagText] = useState('')
    const [ gender, setGender ] = useState('');

    useEffect(() => {
        setFirstName(userData.firstName)
        setLastName(userData.lastName)
        setPhone(userData.phone)
        setAboutMe(userData.aboutMe)
        setPhone(userData.phoneNumber)
    },[])
    const inputPhone = (value) => {
        if(value[0] !== '+') {
            setPhone('+62' + value)
        } else {
            setPhone(value)
        }
    }

    const handleFirstName = (event) => {
        setFirstName(event)
    }

    const handleLastName = (event) => {
        setLastName(event)
    }

    const handleAboutMe = (event) => {
        setAboutMe(event)
    }

    const handleSubmitEdit = () => {
        props.handleEdit({firstName, lastName, phone, aboutMe, gender, tags})
    }
    const addTags = (action) => {
        if(action.nativeEvent.key === ' ') {
            setTags([...tags, tagText]);
            setTagText('');
        }
    }

    const deleteTag = (deletedTag) => {
        const newTags = tags.filter(tag => {return tag !== deletedTag})
        setTags(newTags);
    }

    return(
        <>  
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>First Name</Text>
            <TextInput
            value={firstName}
            onChangeText={handleFirstName}
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
            onChangeText={handleLastName}
            style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C1C1C1',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 10
            }}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>Gender</Text>
            <SelectPicker
                onValueChange={(value) => {
                    setGender(value)
                }}
                selected={gender}
                style={styles.selector}
            >
                <SelectPicker.Item label="Female" value="Female"></SelectPicker.Item>
                <SelectPicker.Item label="Male" value="Male"></SelectPicker.Item>
            </SelectPicker>
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>Phone</Text>
            <TextInput
            value={phone}
            onChangeText={inputPhone}
            type="number"
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
            onChangeText={handleAboutMe}
            multiline={true}
            textAlignVertical="top"
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 10}}>Interest</Text>
            <TextInput 
            style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C1C1C1',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 10
            }}
            onKeyPress={addTags}
            value={tagText}
            onChangeText={(value) => setTagText(value)}
            />
            {
                tags.length === 0 
                    ?   <View></View>
                    :   <View style={styles.tagsContainer}>
                        {
                            tags.map((tag, i) => {
                                return <View key={i} style={styles.tagContainer}>
                                            <Text style={styles.tagText}>{tag}</Text>
                                            <TouchableOpacity onPress={() => deleteTag(tag)}>
                                                <FontAwesome name="times" size={18} color="white" />
                                            </TouchableOpacity>
                                        </View>
                            })                                
                        }
                        </View>
            }
            <TouchableOpacity style={{marginVertical: 25}} onPress={handleSubmitEdit}>
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

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        paddingLeft: 3
    },
    tagContainer: {
        backgroundColor: 'black',
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginRight: 10
    },
    tagText: {
        color: 'white',
        marginRight: 10
    },
    selector: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderColor: '#C1C1C1',
        height: 36
    }
})

export default EditProfileForm