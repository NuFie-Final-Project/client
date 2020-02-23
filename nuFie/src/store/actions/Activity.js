import axios from 'axios';

export const createActivity = (activity) => {
    return function(dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        axios({
            method: 'post',
            url: `${state().other.url}/activities`,
            data: activity.data,
            headers: {
                token: activity.token,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(response => {
            dispatch({type: 'SET_LOADING', val: false})
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
        
export const FetchCategory = (props) => {
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        axios({
            url: `${state().other.url}/activities/interest/` + props,
            method: 'GET',
            headers: {
                token: state().user.token
            }
        })
        .then(({data}) => {
            dispatch({type: 'SET_CATEGORY', val: data.activities})
            dispatch({type: 'SET_LOADING', val: false})
        })    
    }
}
