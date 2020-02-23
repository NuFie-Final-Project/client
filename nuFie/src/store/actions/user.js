import axios from "axios";
import firebase from "../../../config/config_firebase";

export const RegisterAction = params => {
  return function(dispatch) {
    dispatch({ type: "SET_LOADING", val: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(params.email, params.password);
  };
};

export const LoginEmailPassword = params => {
  return function(dispatch) {
    dispatch({ type: "SET_LOADING", val: true });
    firebase.auth().signInWithEmailAndPassword(params.email, params.password);
  };
};

export const Logout = () => {
  return function(dispatch) {
    try {
      firebase.auth().signOut();
      dispatch({ type: "SET_LOGIN", val: "logout" });
    } catch (e) {
      console.log("error");
    }
  };
};

export const ReadSelf  = () => {
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        axios({
            method: 'GET',
            url: `${state().other.url}/users`,
            headers: {
                token: state().user.token
            }
        })
        .then(({data}) => {
            console.log(data, 'ini data')
            dispatch({type: 'SET_BIODATA', val: data.user})
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const UpdateProfile = (props) => {
    return function (dispatch, state){
        dispatch({type: 'SET_LOADING', val: false})
        axios({
            method: 'patch',
            url: `${state().other.url}/users`,
            headers: {
                token: state().user.token
            },
            data: props,
        })
        .then(({data}) => {
            console.log(data, 'berhasil update user')
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch((err) => {
            console.log(err, 'ini error update user')
        })
    }
}
