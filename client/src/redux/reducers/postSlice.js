import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

// Async thunk action
export const fetchPosts = createAsyncThunk(
    "posts/fetchPostsStatus",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(api.url);
            if (!response.ok) {
                throw new Error(`Failed to fetch posts ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    posts: [],
    loading: "idle",
    error: null,
};

const postSlice = createSlice({
    name: "content",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default postSlice.reducer;
