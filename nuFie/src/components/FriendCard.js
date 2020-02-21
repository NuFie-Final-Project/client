import React, { useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    Image,
    TouchableOpacity,
} from 'react-native';
import dummyPP from '../../assets/dummy_pp.webp'

function FriendCard(props) {
    const [ textButton, setTextButton ] = useState('INVITE');
    const [ isButtonActive, setIsButtonActive ] = useState(false);

    const inviteFriend = () => {
        if(textButton === 'INVITE') {
            setTextButton('WAITING RESPONSE');
            setIsButtonActive(true);
        }
    }

    return(
        <View style={styles.friendsContainer}>
            <View style={styles.leftContainer}>
                <Image 
                source={dummyPP}
                style={styles.contactImage}
                />
                <Text style={styles.contactText}>Rafael Alviano Dafito</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity onPress={inviteFriend} disabled={isButtonActive}>
                    <View style={styles.buttonInvite}>
                        <Text style={styles.buttonText}>{textButton}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    friendsContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 12,
        alignItems: 'center', 
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        width: '75%'
    },
    rightContainer: {
        width: '25%'
    },
    contactImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 15
    },
    contactText: {
        fontSize: 18,
        marginRight: 50,
        fontWeight: 'bold'
    },
    buttonInvite: {
        paddingVertical: 4,
        backgroundColor: '#C4C4C4',
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }, 
})

export default FriendCard;