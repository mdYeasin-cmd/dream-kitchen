import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import PeopleReviews from '../PeopleReviews/PeopleReviews';
import WriteReview from '../WriteReview/WriteReview';
import './FoodDetails.css';

const FoodDetails = () => {

    const {user} = useContext(AuthContext);
    const food = useLoaderData();
    const { _id, foodName, description, photoUrl, price, deliveryTime } = food;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error));
    }, [_id])

    const handleReview = (event) => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;
        console.log(reviewText);

        const reviewerInfo = {
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            serviceId: _id,
            serviceName: foodName,
            reviewText: reviewText
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewerInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged) {
                    const newReviews = [reviewerInfo, ...reviews];
                    setReviews(newReviews);
                }
            })
            .catch(error => console.error(error));
    }

    

    return (
        <div>
            <div className="container">
                <h2 className="text-center my-3 services-title">{foodName}</h2>
                <div>
                    <img className="w-100 food-details-img" src={photoUrl} alt="" />
                </div>
                <h2 className="fs-4 mt-3">{foodName} All Details Here</h2>
                <p className="mt-3 mb-0"><span className="fw-semibold">Price:</span> <span>{price}TK</span></p>
                <p className=""><span className="fw-semibold">Delivery Time:</span> <span>{deliveryTime}</span></p>
                <p className="fw-semibold mb-0">Description:</p>
                <p className="mb-4">
                    {description}
                </p>
            </div>
            <WriteReview id={_id} handleReview={handleReview}></WriteReview>
            <PeopleReviews id={_id} reviews={reviews}></PeopleReviews>
        </div>
    );
};

export default FoodDetails;