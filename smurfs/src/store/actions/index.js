import axios from 'axios'

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START'

export const getSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCHING_SMURF_START})
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
}