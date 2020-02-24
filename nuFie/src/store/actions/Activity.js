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
            console.log('berhasil Create')
            dispatch({type: 'SET_LOADING', val: false})
            dispatch({type: 'SET_TRIGGER', val: 'add'})
        })
        .catch(error => {
            console.log({error});
        })
    }
}

export const getActivities = () => {
    return function(dispatch, state) {
        dispatch({
            type: 'FETCH_ACTIVITIES_START'
        })
        axios({
            method: 'get',
            url: `${state().other.url}/activities?limit=20`,
            headers: {
                token: state().user.token
            }
        })
        .then(response => {
            const activities = response.data.activities.filter(activity => {
                return activity.owner._id == state().user.login
            })
            const invitation = response.data.activities.filter(activity => {
                return activity.pendingInvites.includes(state().user.login)
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
        axios({
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

export const InviteFriend = (props) => {
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        axios({
            url: `${state().other.url}/activities/invite/` + props.postId,
            method: 'post',
            headers: {
                token: state().user.token
            },
            data: {
                targetId: props.userId
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
        axios({
            url: `${state().other.url}/activities/inviteAccept/` + props,
            method: 'post',
            headers: {
                token: state().user.token
            },
        })
        .then(({data}) => {
            console.log('berhasil accept')
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
        axios({
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