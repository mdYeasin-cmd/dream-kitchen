import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AllReviewTable from '../AllReviewTable/AllReviewTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
            .catch(error => console.errorI(error));
    }, [user?.email]);

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const displayReviews = allReviews.filter(review => review._id !== id);
                    setAllReviews(displayReviews);
                }

            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <AllReviewTable
                handleDelete={handleDelete}
                allReviews={allReviews}
            ></AllReviewTable>
        </div>
    );
};

export default MyReviews;