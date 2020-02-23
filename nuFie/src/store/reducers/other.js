const store = {
    show: false,
    url: 'http://192.168.1.9:3000'
}

export default function user (state = store, action){
    switch (action.type) {
        case 'SET_SHOW':
            return {...state, show: action.val}
        default:
            return state
    }
}