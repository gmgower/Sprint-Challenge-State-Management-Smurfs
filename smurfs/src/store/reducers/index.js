import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,  
} from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
            case FETCHING_SMURF_SUCCESS:
                    return {
                        ...state,
                        isFetching: false,
                        smurfs: action.payload
                    }
            case FETCHING_SMURF_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: `Unable to load Smurfs: ${action.payload}`
                }

        default:
            return state;
    }
}