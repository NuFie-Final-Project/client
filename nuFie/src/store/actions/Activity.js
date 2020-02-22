import axios from 'axios';

export const createActivity = (activity) => {
    console.log()
    return function(dispatch, state) {
        console.log(activity.data)
        axios({
            method: 'post',
            url: 'http://172.16.15.240:3000/activities',
            data: activity.data,
            headers: {
                token: activity.token
            }
        })
        .then(response => {
            console.log(response.data, '========================')
        })
        .catch(error => {
            console.log({error}.error);
        })
    }
}
        