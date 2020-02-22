import axios from 'axios';

export const createActivity = async (activity) => {
    console.log(activity);
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/activities',
        data: activity,
        headers: {
            token: activity.token
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log({error}.error);
    })
}