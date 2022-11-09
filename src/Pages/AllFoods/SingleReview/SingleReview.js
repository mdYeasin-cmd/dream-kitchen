import React, { useContext } from 'react';
import './SingleReview.css';

const SingleReview = ({ review }) => {

    
    const { email, name, image, reviewText } = review;
    console.log(image)

    return (
        <div className="shadow-sm p-3">
            <div className="d-flex align-items-center">
                <img className="reviewer-img" src={image} alt="" />
                <span className="ms-2 fw-semibold text-muted">{name}</span>
            </div>
            <div className="mt-2 ps-2">
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default SingleReview;