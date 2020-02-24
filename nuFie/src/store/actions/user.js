import axios from "axios";
import firebase from "../../../config/config_firebase";

export const RegisterAction = params => {
  return function(dispatch) {
    dispatch({ type: "SET_LOADING", val: true });
    return firebase
      .auth()
      .createUserWithEmailAndPassword(params.email, params.password);
  };
};

export const LoginEmailPassword = params => {
  return function(dispatch) {
    dispatch({ type: "SET_LOADING", val: true });
    return firebase.auth().signInWithEmailAndPassword(params.email, params.password);
  };
};

export const Logout = () => {
  return function(dispatch) {
    try {
      firebase.auth().signOut();
      dispatch({ type: "CLEAR_STATE"});
      dispatch({ type: 'CLEAR_ACTIVITY'});
      dispatch({ type: "SET_LOGIN", val: "logout" });
    } catch (e) {
      console.log("error");
    }
  };
};

export const ReadSelf = () => {
<<<<<<< HEAD
  return function(dispatch, state) {
    dispatch({ type: "SET_LOADING", val: true });
    axios({
      method: "GET",
      url: `${state().other.url}/users`,
      headers: {
        token: state().user.token
      }
    })
      .then(({ data }) => {
        dispatch({ type: "SET_BIODATA", val: data.user });
        dispatch({ type: "SET_LOADING", val: false });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const UpdateProfile = props => {
  return function(dispatch, state) {
    dispatch({ type: "SET_LOADING", val: false });
    axios({
      method: "patch",
      url: `${state().other.url}/users`,
      headers: {
        token: state().user.token
      },
      data: props
    })
      .then(({ data }) => {
        dispatch({ type: "SET_BIODATA", val: data.user });
        dispatch({ type: "SET_LOADING", val: false });
      })
      .catch(err => {
        console.log(err, "ini error update user");
      });
  };
};

export const FindFriend = props => {
  return function(dispatch, state) {
    dispatch({ type: "SET_LOADING", val: true });
    axios({
=======
    return function (dispatch, state) {
        dispatch({type: 'SET_LOADING', val: true})
        return axios({
            method: 'GET',
            url: `${state().other.url}/users`,
            headers: {
                token: state().user.token
            }
        })
        .then(({data}) => {
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
        return axios({
            method: 'patch',
            url: `${state().other.url}/users`,
            headers: {
                token: state().user.token
            },
            data: props,
        })
        .then(({data}) => {
          dispatch({type: 'SET_BIODATA', val: data.user})
          dispatch({type: 'SET_LOADING', val: false})
        })
        .catch((err) => {
            console.log(err, 'ini error update user')
        })
    }
}

export const FindFriend = (props) => {
  return function (dispatch, state){
    dispatch({type: 'SET_LOADING', val: true})
    return axios({
>>>>>>> d508c4d8ae65591c6329f3bcd3dc9347f47f3de9
      url: `${state().other.url}/users/getByMostMatchingInterests`,
      headers: {
        token: props
      },
<<<<<<< HEAD
      method: "POST",
      data: { tags: state().user.biodata.interests }
=======
      method: 'post',
      data: {tags: state().user.biodata.interests}
    })
    .then(({data}) => {
      dispatch({type: 'SET_SUGGESTFRIEND', val: data.users})
      dispatch({type: 'SET_LOADING', val: false})
    })
    .catch((err) => {
      console.log(err, 'find')
>>>>>>> d508c4d8ae65591c6329f3bcd3dc9347f47f3de9
    })
      .then(({ data }) => {
        dispatch({ type: "SET_SUGGESTFRIEND", val: data.users });
        dispatch({ type: "SET_LOADING", val: false });
      })
      .catch(err => {
        console.log(err, "find");
      });
  };
};
