import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/reducers/postSlice";
import Card from "../components/Card/Card";

const Home = () => {
    const { posts, loading, error } = useSelector((state) => state.content);
    const dispatch = useDispatch();
    console.log(posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div>
            <h1>Home Page</h1>
            <Card posts={posts} loading={loading} error={error} />
        </div>
    );
};

export default Home;
