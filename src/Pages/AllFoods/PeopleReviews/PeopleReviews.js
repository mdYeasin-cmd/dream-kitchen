import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const PeopleReviews = ({ reviews }) => {
    
    return (
        <div>
            <div className="container mb-5">
                <h3 className="fw-semibold fs-5">People's review</h3>
                <>
                    {
                        reviews.map(review => <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>)
                    }
                </>
            </div>
        </div>
    );
};

export default PeopleReviews;