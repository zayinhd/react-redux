import axios from "axios";

import {
    fetchMoviesRequest,
    fetchMoviesFailure,
    fetchMoviesSuccess,
} from "./movieActions";

export const fetchMovies = () => async () => {
    dispatch(fetchMoviesRequest());

    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=3863e1ea20fbc5fb82f90870c40a14b1"
        );

        dispatch(fetchMoviesSuccess(response.data.results));
    } catch (error) {
        dispatch(fetchMoviesFailure(error.message));
    }
};
