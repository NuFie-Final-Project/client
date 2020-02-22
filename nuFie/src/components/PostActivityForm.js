import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SelectPicker from 'react-native-form-select-picker';
import { useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createActivity } from '../store/actions/Activity';

function postActivityForm({ route, openAlert, uploadImage }) {
    const [ tags, setTags ] = useState([]);
    const [ tagText, setTagText] = useState('');
    const [ isPromo, setIsPromo ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ memberLimit, setMemberLimit ] = useState('');
    const [ date, setDate ] = useState(new Date()); 
    const [ show, setShow ] = useState(false);
    const [ location, setLocation ] = useState('');
    const [ address, setAddress ] = useState('');
    
    const user = useSelector(state => state.user);

    const chooseUploadMethod = () => {
        openAlert({showAlert: true})
    }

    useEffect(() => {
        if(route.name === 'EDIT POST') {
            setTags(['ABC', 'DEF']);
            setIsPromo('YES');
            setTitle('TEST');
            setDescription('THIS IS A TEST')
        }
    }, [])

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

    const setFormDate = (event, selectedDate) => {
        if(event.type === 'dismissed' || event.type === 'set') {
            setShow(false);
        } 
        if(selectedDate) {
            setDate(selectedDate)
        }
    }

    const postActivity = () => {
        let boolPromo;    
        if(isPromo) {
            boolPromo = true;
        } else {
            boolPromo = false;
        }
        const activity = {
            title,
            description,
            image: uploadImage,
            tags: JSON.stringify(tags),
            memberLimit,
            due_date: date,
            location,
            address
        }
        createActivity({data: activity, token: user.login,});
    }

    return (
        <>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Title</Text>
                    <TextInput 
                    style={styles.textInput}
                    value={title}
                    onChangeText={(value) => setTitle(value)}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput 
                    style={styles.textDescription}
                    multiline={true}
                    textAlignVertical="top"
                    value={description}
                    onChangeText={(value) => setDescription(value)}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Upload Image</Text>
                    {
                        uploadImage.length === 0
                        ?   <TouchableOpacity onPress={chooseUploadMethod}>
                                <View style={styles.uploadImage}>
                                    <FontAwesome name="camera" size={40} color="#DADADA"/>
                                    <Text style={{marginTop: 10, color: '#5A5A5A'}}>Upload With Camera or File</Text>
                                </View>
                            </TouchableOpacity>
                        :   <TouchableOpacity onPress={chooseUploadMethod}>
                                <Image source={{uri: uploadImage}} style={styles.uploadedImage}/>
                            </TouchableOpacity>
                    }
                    
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Do you have Promo?</Text>
                    <SelectPicker
                        onValueChange={(value) => {
                            setIsPromo(value)
                        }}
                        selected={isPromo}
                        style={styles.selector}
                    >
                        <SelectPicker.Item label="YES" value="YES"></SelectPicker.Item>
                        <SelectPicker.Item label="NO" value="NO"></SelectPicker.Item>
                    </SelectPicker>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Interest Category</Text>
                    <TextInput 
                    style={styles.textInput}
                    onKeyPress={addTags}
                    value={tagText}
                    onChangeText={(value) => setTagText(value)}></TextInput>
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
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Due Date</Text>
                    <TouchableWithoutFeedback onPress={() => setShow(true)}>
                        <View style={{
                            marginTop: 6,
                            borderWidth: 1,
                            borderRadius: 9,
                            paddingVertical: 7,
                            paddingHorizontal: 12,
                            height: 37,
                            borderColor: '#C1C1C1'}}>
                                <Text>{date.toDateString()}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    { show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        is24Hour={true}
                        display="default"
                        onChange={setFormDate}
                      />
                    )}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Location</Text>
                    <TextInput 
                    style={styles.textInput}
                    value={location}
                    onChangeText={(value) => setLocation(value)}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Address</Text>
                    <TextInput 
                    style={styles.textInput}
                    value={address}
                    onChangeText={(value) => setAddress(value)}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Member Limit</Text>
                    <TextInput 
                    style={styles.textInput}
                    value={memberLimit}
                    onChangeText={(value) => setMemberLimit(value)}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={postActivity}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>POST</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 20
    },
    inputContainer: {
        marginBottom: 20
    },
    inputLabel: {
        fontSize: 17
    },
    textInput: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderColor: '#C1C1C1'
    },
    textDescription: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderColor: '#C1C1C1',
        height: 100
    },
    uploadImage: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 9,
        marginTop: 6,
        backgroundColor: '#5555',
        borderColor: '#C1C1C1',
    },
    uploadedImage: {
        width: '100%', 
        height: 150, 
        borderRadius: 9,
        marginTop: 6,
    },
    selector: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderColor: '#C1C1C1',
        height: 36
    },
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03A9F4',
        paddingVertical: 10,
        borderRadius: 9,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default postActivityForm;