import React from 'react';

import Row from 'react-bootstrap/Row';
import FoodCard from '../../Shared/FoodCard/FoodCard';

const DeliciousRecipies = () => {
    return (
        <div>
            <h2 className="text-center">Delicious Recipies</h2>
            <p className="text-center">Every customer setisfy by all this recipies</p>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                   <FoodCard></FoodCard>
                </Row>
            </div>
        </div>
    );
};

export default DeliciousRecipies;