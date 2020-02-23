import axios from 'axios';

export const createActivity = (activity) => {
    return function(dispatch, state) {
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

export const getActivities = (user) => {
    return function(dispatch, getState) {
        console.log('test')
        dispatch({
            type: 'FETCH_ACTIVITIES_START'
        })
        axios({
            method: 'get',
            url: 'http://192.168.43.133:3000/activities?limit=20',
            headers: {
                token: user.token
            }
        })
        .then(response => {
            const activities = response.data.activities.filter(activity => {
                return activity.owner == user.id
            })
            dispatch({
                type: 'FETCH_ACTIVITIES',
                payload: activities
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const editActivity = (activity) => {
    return function(dispatch, getState) {
        axios({
            method: 'patch',
            url: `http://192.168.43.133:3000/activities/${activity.id}`,
            data: activity.data,
            headers: {
                token: activity.token
            }
        })
        .then(response => {
            dispatch(getActivities({token: activity.token, id: activity.user_id}))
        })
        .catch(error => {
            console.log(error);
        })
    }
}
        