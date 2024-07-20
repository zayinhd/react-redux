import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
} from "./movieActions";

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const movieReducer = (state = initialState, action) => {
    if (action.type == FETCH_MOVIES_REQUEST) {
        return { ...state, loading: true, error: null };
    } else if (action.type == FETCH_MOVIES_SUCCESS) {
        return { ...state, loading: false, movies: action.payload };
    } else if (action.type == FETCH_MOVIES_FAILURE) {
        return { ...state, loading: false, error: action.payload };
    } else return state;
};

export default movieReducer;
