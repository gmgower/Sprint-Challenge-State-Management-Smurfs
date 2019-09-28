import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  POSTING_SMURF_START,
  POSTING_SMURF_SUCCESS,
  POSTING_SMURF_FAILURE,
  DELETING_SMURF_START,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to load Smurfs: ${action.payload}`
      };

    /* ===== POST =====  */

    case POSTING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POSTING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case POSTING_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to post New Smurf: ${action.payload}`
      };

       /* ===== DELETE =====  */

       case DELETING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
    case DELETING_SMURF_SUCCESS:
        return {
            ...state,
            isFetching: false,
            smurfs: action.payload
        }
    case DELETING_SMURF_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: `Unable to delete Smurf: ${action.payload}`
        }



    default:
      return state;
  }
};
