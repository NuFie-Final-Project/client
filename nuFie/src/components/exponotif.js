import {Notifications} from 'expo'
import * as Permissions from 'expo-permissions'
import axios from 'axios'
// import {useSelector, useDispatch} from 'react-redux'

export default async function ExpoRegisterPushNotification(userId) {
    // const dispatch = useDispatch()
    // const url = useSelector(state => state.other.url)
    // const token = useSelector(state => state.user.token)
    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted') {
        return
    }
    const pushToken = await Notifications.getExpoPushTokenAsync()
    return axios({
        url: 'http://172.16.15.240:3000/users/savePushToken',
        method: 'post',
        data: {
            userId, pushToken
        }
    })
    .then(({data}) => {

    })
    .catch((err) => {
        console.log(err)
    })
}