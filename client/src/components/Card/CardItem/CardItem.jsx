import React from 'react';
import "./styles.css";

const CardItem = ({ title, content }) => {
    return (
        <>
            <div className='card-container'>
                <div>{ title }</div>
                <div>{ content }</div>
            </div>


        </>
    )
}

export default CardItem;