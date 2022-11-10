import React from 'react';
import { Link } from 'react-router-dom';

const AllReviewTableRow = ({ review, handleDelete, index }) => {

    const { _id, reviewText, serviceName } = review;

    return (
        <div className="row">
            <div className="col-1 d-flex align-items-center justify-content-center border border-primary">
                <p className="text-center">{index + 1}</p>
            </div>
            <div className="col-4 d-flex align-items-center border border-primary">
                <p>{serviceName}</p>
            </div>
            <div className="col-5 d-flex align-items-center border border-primary">
                <p className="">{reviewText}</p>
            </div>
            <div className="col-2 d-flex align-items-center border border-primary">
                <Link to={`/reviewUpdate/${_id}`}>
                    <button 
                    className="btn btn-primary my-2 me-2">Update</button>
                </Link>

                <button
                    className="btn btn-primary my-2"
                    onClick={() => handleDelete(_id)}
                >Delete</button>
            </div>
        </div>
    );
};

export default AllReviewTableRow;