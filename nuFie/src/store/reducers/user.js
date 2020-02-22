const store = {
    login: false,
    loading: false,
    userData: {
        lastName: null,
        firstName: null,
        email: null,
        password: null
    }
}

export default function user (state = store, action){
    switch (action.type) {
        case 'SET_LOGIN':
            return {...state, login: action.val}
        case 'SET_LOADING':
            return {...state, loading: action.val}
        case 'SET_USERDATA':
            return {...state, userData: action.val}
        default:
            return state
    }
}