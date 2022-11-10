import React, { useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AllReviewTable from '../AllReviewTable/AllReviewTable';

const MyReviews = () => {

    useTitle('My Reviews - Dream Kitchen')
    const { user } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dream-kitchen-token')}`
            }
        })
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
                    toast.success('Successfully Deleted')
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