import axios from "axios";

const url = "http://localhost:5000/favorite";

export const fetchFavorite = () => axios.get(url);
export const createFavorite = () => axios.post(url, newFavorite);
