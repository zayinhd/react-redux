import axios from "axios";

const url = "http://localhost:5000/bookmark";

export const fetchBookmark = () => axios.get(url);
export const createBookmark = (newBookmark) => axios.post(url, newBookmark);
export const updateBookmark = (id, updatedBookmark) =>
    axios.patch(`${url}/${id}`, updatedBookmark);
export const deleteBookmark = (id) => axios.delete(`${url}/${id}`);
