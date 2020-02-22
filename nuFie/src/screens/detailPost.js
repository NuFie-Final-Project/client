import React from 'react'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions, 
    ScrollView ,
    TouchableOpacity
} from 'react-native'
import CountMember from '../components/memberCount'
import ButtonP from '../components/ButtonOnPost'
import { useNavigation } from '@react-navigation/native'

export default function DetailPost() {
    const navigation = useNavigation();
    const handleGroupChat = () => {
        navigation.navigate('ChatRoom')
    }
    return (
        <>
            <View style={style.editButtonContainer}>
                <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => navigation.navigate('EDIT POST')}>
                    <View style={style.editButton}>
                        <Text>Edit Post</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.container}>
                <View>
                    <Image 
                        source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                        style={style.image} 
                    />
                </View>
                <ScrollView>
                    <View style={style.scroll}>
                        <View style={style.content}>
                            <Text style={style.title}>This is litle of Interest</Text>
                            <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                        <View style={style.content}>
                        <Text style={style.title}>Promo Detail:</Text>
                            <Text style={style.description}>Lorem pularised in the 1960s with the release of Letraset sheets cont</Text>
                        </View>
                        <View style={style.CountMember}>
                            <CountMember/>
                        </View>
                        <View style={style.buttonWrap}>
                            <ButtonP text="Open Group Chat" handle={handleGroupChat}/>
                            <ButtonP text="Search Friend" />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        width: Dimensions.get('window').width
    },
    editButtonContainer: {
        width: Dimensions.get('window').width,
        marginVertical: 10,
        paddingRight: 15
    },
    editButton: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderColor: '#C1C1C1',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 10
    },  
    image: {
        width: 340, 
        height: 220,
        borderRadius: 20
    },
    content: {
        
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 8
    },
    description: {
        textAlign: 'center'
    },
    CountMember: {
        alignItems: 'center',
        margin: 10
    },
    scroll: {
        height: Dimensions.get('window').height
    },
    buttonWrap: {
        alignItems: 'center'
    }
})