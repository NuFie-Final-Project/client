const initializeState = {data: [], loading: false, error: null}

export default function activityReducer (state = initializeState, action) {
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
            return state
    }
}