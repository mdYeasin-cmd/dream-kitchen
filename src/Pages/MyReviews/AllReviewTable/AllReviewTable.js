import React from 'react';
import AllReviewTableRow from '../AllReviewTableRow/AllReviewTableRow';
import './AllReviewTable.css';

const AllReviewTable = ({ allReviews, handleDelete }) => {

    return (
        <div className="my-4">
            <div className="container">
                <h2 className="text-center services-title mb-5">All Reviews</h2>
                {
                    allReviews.length === 0 ?
                        <>
                            <div style={{height: "400px"}} className="d-flex align-items-center justify-content-center">
                                <h2>No Review Added</h2>
                            </div>
                        </> :
                        <>
                            <div className="row text-center fw-semibold table-design">
                                <div className="col-1">

                                </div>
                                <div className="col-4">
                                    <h4 className="fs-5">Food Name</h4>
                                </div>
                                <div className="col-5">
                                    <h4 className="fs-5">Review</h4>
                                </div>
                                <div className="col-2">
                                    <h4 className="fs-5">Change Status</h4>
                                </div>
                            </div>
                            {
                                allReviews.map((review, idx) => <AllReviewTableRow
                                    key={review._id}
                                    review={review}
                                    index={idx}
                                    handleDelete={handleDelete}
                                ></AllReviewTableRow>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default AllReviewTable;