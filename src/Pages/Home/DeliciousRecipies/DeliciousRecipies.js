import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import Button from 'react-bootstrap/Button';
import './DeliciousRecipies.css'

const DeliciousRecipies = () => {

    const [foods, setFoods] = useState([]);

    console.log(foods);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                const { firstThreeFoods } = data;
                setFoods(firstThreeFoods);
            });
    }, []);



    return (
        <div className="py-5">
            <h2 className="text-center fs-1 text-color">Delicious Recipies</h2>
            <p className="text-center w-50 mx-auto mb-5 text-color">
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
                <Button className="btn-see-all fw-semibold py-2 fs-5" variant="primary">See All</Button>
            </div>
        </div>
    );
};

export default DeliciousRecipies;