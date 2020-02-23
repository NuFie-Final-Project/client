const initializeState = {
    data: [], 
    error: null,
    category: []
}

export default function activityReducer (state = initializeState, action) {
<<<<<<< HEAD
    switch(action.type) {
        case 'FETCH_ACTIVITIES_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_ACTIVITIES': 
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default: 
=======
    switch (action.type) {
        case 'SET_MYPOST':
            return {...state, data: action.val}
        case 'SET_CATEGORY':
            return {...state, category: action.val}
        default:
>>>>>>> before rebase
            return state
    }
}