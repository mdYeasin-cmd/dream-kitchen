import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './FoodCard.css';

const FoodCard = ({ food }) => {

    const {foodName, photoUrl, price, description} = food;
    console.log(food);
    return (
        <Col>
            <Card className="food-card shadow pb-3">
                <Card.Img className="card-image p-3" variant="top" src={photoUrl} />
                <Card.Body>
                    <Card.Title>{foodName}</Card.Title>
                    <Card.Text>
                        BDT {price}
                    </Card.Text>
                    <Card.Text>
                        {
                            description.length > 100 ?
                            description.slice(0, 100) + '...' :
                            description
                        }
                    </Card.Text>
                    <Button className="w-100 fw-semibold" variant="primary">Go somewhere</Button>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default FoodCard;