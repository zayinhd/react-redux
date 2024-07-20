import React, { useEffect } from 'react';
import CardItem from './CardItem/CardItem';
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from '.../movieFetch';

const Movie = () => {
    const { movies, loading, error } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    console.log(movies);

    useEffect(() => {
        dispatch(fetchMovies());

    }, [dispatch])
}
const Card = () => {
    return (
        <Grid container spacing={ 2 }>
            <Grid item xs={ 6 } md={ 8 }><CardItem /></Grid>
        </Grid>

    )
}

export default Card;