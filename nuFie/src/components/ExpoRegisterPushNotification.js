import {Notifications} from 'expo'
import * as Permissions from 'expo-permissions'
import axios from 'axios'

export default async function ExpoRegisterPushNotification(userId) {
    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted') {
        console.log('No notification permissions')
        return
    }

    const pushToken = await Notifications.getExpoPushTokenAsync()
    console.log('from exporegisterpushnotif', pushToken)
    return null
    // return axios.post(
    //     {
    //         token,
    //         userId
    //     }
    // )
}