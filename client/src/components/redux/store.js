import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "../movieReducer";

const mainReducer = combineReducers({
    movies: movieReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
