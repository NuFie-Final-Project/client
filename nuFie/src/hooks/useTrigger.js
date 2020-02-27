import React, {useState, useEffect} from 'react'
import firebase from '../../config/config_firebase.js'
import {useDispatch, useSelector} from 'react-redux'
import {getActivities} from '../store/actions/Activity'

export default function useTrigger(props) {
    const dispatch = useDispatch()
    const [data, setData] = useState(1)
    const user = useSelector(state => state.user);
    console.log(user)

    useEffect(
        () => {
            return () => firebase.firestore().collection('trigger').onSnapshot(function(doc) {
                setData(data+1)
                console.log('================================================================')
                dispatch({type: 'SET_TRIGGER', val: data})
                dispatch(getActivities({ token: user.token, id: user.login }))
            })
        },
        []
    )

    return data
}