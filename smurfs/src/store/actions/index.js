export const FETCHING_SMURF_START = 'FETCHING_SMURF_START'

export const getSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCHING_SMURF_START})
    }
}