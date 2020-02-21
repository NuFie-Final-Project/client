const store = {
    login: false
}

export default function user (state = store, action){
    switch (action.type) {
        case 'SET_LOGIN':
            return {...state, login: action.val}
        default:
            return state
    }
}