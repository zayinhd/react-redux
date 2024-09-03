import React from 'react';
import CardItem from './CardItem/CardItem';

const Card = ({ posts, loading, error }) => {
    if (loading == "pending") return <p>Loading...</p>;
    if (loading == "failed") return <p>Error: { error }</p>;

    return (
        <>
            {
                posts.map((post) => (
                    <CardItem key={ post.id } title={ post.title } content={ post.content } />
                ))

            }
        </>
    )
}

export default Card;