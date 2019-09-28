import axios from 'axios'

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START'
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS'
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE'

export const getSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCHING_SMURF_START})
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({type: FETCHING_SMURF_FAILURE, payload: err})
        })
    }
}

                    /* ===== POST =====  */

export const POSTING_SMURF_START = 'POSTING_SMURF_START'
export const POSTING_SMURF_FAILURE = 'POSTING_SMURF_FAILURE'
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS'
export const postSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POSTING_SMURF_START})
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res)
            dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: POSTING_SMURF_FAILURE, payload: err})
        })
}