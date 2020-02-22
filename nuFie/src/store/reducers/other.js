const store = {
    show: false
}

export default function user (state = store, action){
    switch (action.type) {
        case 'SET_SHOW':
            return {...state, show: action.val}
        default:
            return state
    }
}