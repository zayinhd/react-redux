export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchMoviesRequest = () => ({
    type: FETCH_MOVIES_REQUEST,
});
export const fetchMoviesSuccess = () => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
});
export const fetchMoviesFailure = () => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error,
});
