import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FoodDetails.css';

const FoodDetails = () => {

    const food = useLoaderData();
    const { foodName, description, photoUrl, price, deliveryTime } = food;

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
        </div>
    );
};

export default FoodDetails;