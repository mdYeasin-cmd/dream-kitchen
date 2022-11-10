import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../../contexts/AuthProvider';
import AllReviewTableRow from '../AllReviewTableRow/AllReviewTableRow';
import './AllReviewTable.css';

const AllReviewTable = ({allReviews, handleDelete}) => {

    
    // const [allReviews, setAllReviews] = useState([]);
    // const [displayReviews, setDisplayReviews] = useState(allReviews);
    // console.log(displayReviews)

    // console.log(allReviews)
    // console.log(displayReviews)
 
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
    //         .then(res => res.json()) 
    //         .then(data => setAllReviews(data))
    //         .catch(error => console.errorI(error));
    // }, [user?.email])

    // const handleDelete = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //            console.log(data);
                
    //         })
    //         .catch(error => console.error(error));
    // }



    return (
        <div className="my-4">
            <div className="container">
                <h2 className="text-center services-title mb-5">All Reviews</h2>
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
            </div>
        </div>
    );
};

export default AllReviewTable;