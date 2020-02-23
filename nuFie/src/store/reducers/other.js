const store = {
    show: false,
    url: 'http://192.168.1.9:3000',
    trigger: 'null'
}

export default function user (state = store, action){
    switch (action.type) {
        case 'SET_SHOW':
            return {...state, show: action.val}
        case 'SET_TRIGGER':
                return {...state, trigger: action.val}
        default:
            return state
    }
}