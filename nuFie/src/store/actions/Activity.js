import axios from 'axios';

export const createActivity = (activity) => {
    return function(dispatch, state) {
        console.log(activity.data)
        axios({
            method: 'post',
            url: 'http://192.168.43.133:3000/activities',
            data: activity.data,
            headers: {
                token: activity.token,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(response => {
            console.log(response.data, '========================')
        })
        .catch(error => {
            console.log({error});
        })
    }
}
        