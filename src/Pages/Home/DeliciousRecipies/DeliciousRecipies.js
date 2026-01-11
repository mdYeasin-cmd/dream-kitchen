import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import './DeliciousRecipies.css'
import { Link } from 'react-router-dom';
import ReusableButton from '../../Shared/ReusableButton/ReusableButton';

const DeliciousRecipies = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://dream-kitchen-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                const { firstThreeFoods } = data;
                setFoods(firstThreeFoods);
            });
    }, []);

    return (
        <div className="delicious-section">
            <h2 className="section-title text-center">Delicious Recipies</h2>
            <p className="section-lede text-center mb-5">
                All recipies are handmaded and Popular in my website as clinet review. This all recipies are special for me as a cooking enthusiast.
            </p>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        foods.map(food => <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>)
                    }
                </Row>
            </div>
            <div className="text-center mt-5">
                <Link to="/services">
                    <ReusableButton className="btn btn-primary btn-see-all fw-semibold py-2 fs-5">
                        See All
                    </ReusableButton>
                </Link>
            </div>
        </div>
    );
};

export default DeliciousRecipies;
