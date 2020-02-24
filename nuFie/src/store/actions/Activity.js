import axios from 'axios';
import db from '../../../config/config_firebase'

export const createActivity = (activity) => {
    return function(dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        return axios({
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
            return db.firestore()
                    .collection('chat')
                    .doc(response.data.activity._id)
                    .collection('arrMessage')
        })
        .then((data) => {
            dispatch({type: 'SET_LOADING', val: false})
            dispatch({type: 'SET_TRIGGER', val: 'add'})
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const getActivities = () => {
    return function(dispatch, state) {
        dispatch({
            type: 'FETCH_ACTIVITIES_START'
        })
        return axios({
            method: 'get',
            url: `${state().other.url}/activities?limit=20`,
            headers: {
                token: state().user.token
            }
        })
        .then(response => {

            let activities = [];
            let invitation = [];
            let listGroup = [];


            if(response.data.activities.length > 0) {
                activities = response.data.activities.filter(activity => {
                    return activity.owner._id == state().user.login
                })
                invitation = response.data.activities.filter(activity => {
                    return activity.pendingInvites.includes(state().user.login)
                })
                listGroup = response.data.activities.filter(activity => {
                    return activity.members.includes(state().user.login);
                })
            }

            dispatch({
                type: 'FETCH_ACTIVITIES_JOIN',
                payload: listGroup
            })
            dispatch({
                type: 'FETCH_ACTIVITIES',
                payload: activities
            })
            dispatch({
                type: 'SET_INVITATION',
                val: invitation
            })

        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const editActivity = (activity) => {
    return function(dispatch, state) {
        return axios({
            method: 'patch',
            url: `${state().other.url}/activities/${activity.id}`,
            data: activity.data,
            headers: {
                token: activity.token
            }
        })
        .then(response => {
            dispatch({type: 'SET_TRIGGER', val: 'edit'})
        })
        .catch(error => {
            console.log(error);
        })
    }
}
        
export const FetchCategory = (props) => {
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        return axios({
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

export const InviteFriend = (props) => {
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        return axios({
            url: `${state().other.url}/activities/invite/` + props.postId,
            method: 'post',
            headers: {
                token: state().user.token
            },
            data: {
                targetId: props.userId,
                pushToken: props.pushToken
            }
        })
        .then(({data}) => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch((err) => {
            console.log(err, 'gagal Invite')
        })    
    }
}

export const AcceptInvite = (props) => {
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        return axios({
            url: `${state().other.url}/activities/inviteAccept/` + props,
            method: 'post',
            headers: {
                token: state().user.token
            },
        })
        .then(({data}) => {
            dispatch({type: 'SET_LOADING', val: false})
            dispatch({type: 'SET_TRIGGER', val: 'acceptinvite'})
        })
        .catch((err) => {
            console.log(err, 'gagal accpet')
        })    
    }
}

export const cancelActivity = (id) => {
    return function(dispatch, state) {
        return axios({
            method: 'patch',
            url: `${state().other.url}/activities/cancel/` + id,
            headers: {
                token: state().user.token
            }
        })
        .then(response => {
            dispatch({type: 'SET_TRIGGER', val: 'cancel'})
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const leaveActivity = (id) => {
    return function (dispatch, state) {
        return axios({
            method: 'post',
            url: `${state().other.url}/activities/leave/${id}`,
            headers: {
                token: state().user.token
            }
        })
        .then(response => {
            dispatch({type: 'SET_TRIGGER', val: 'list_join_group'})
        })
        .catch(error => {
            console.log(error);
        })
    }
}