import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import axios from "axios";
// import {useSelector, useDispatch} from 'react-redux'

export default async function ExpoRegisterPushNotification(userId) {
  // const dispatch = useDispatch()
  // const url = useSelector(state => state.other.url)
  // const token = useSelector(state => state.user.token)
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== "granted") {
    return;
  }
  const pushToken = await Notifications.getExpoPushTokenAsync();
  return axios({
    url:
      "http://ec2-18-219-119-178.us-east-2.compute.amazonaws.com:55555/users/savePushToken",
    method: "post",
    data: {
      userId,
      pushToken
    }
  })
    .then(({ data }) => {})
    .catch(err => {
      console.log(err);
    });
}
