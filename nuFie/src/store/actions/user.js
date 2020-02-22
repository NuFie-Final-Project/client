import axios from 'axios'
import firebase from '../../../config/config_firebase'



export const RegisterAction = (params) => {
    return function (dispatch) {
        dispatch({type: 'SET_LOADING', val: true})
        firebase.auth().createUserWithEmailAndPassword(params.email,params.password)
    }
}

export const LoginEmailPassword = (params) => {
    return function (dispatch) {
        dispatch({type: 'SET_LOADING', val: true})
        firebase.auth().signInWithEmailAndPassword(params.email, params.password)
    }
}