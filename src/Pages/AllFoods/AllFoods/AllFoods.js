import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import './AllFoods.css';

const AllFoods = () => {
    const {allFoods} = useLoaderData();
    console.log(allFoods);
    return (
        <div className="mt-4 mb-5">
            <h2 className="text-center services-title">All Foods</h2>
            <div className="container mt-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        allFoods.map(food => <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default AllFoods;