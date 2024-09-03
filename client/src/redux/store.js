import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postSlice";

const store = configureStore({
    reducer: {
        content: postReducer,
    },
});

export default store;
