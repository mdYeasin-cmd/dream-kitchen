import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './FoodCard.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const FoodCard = ({ food }) => {

    const { foodName, photoUrl, price, description } = food;
    console.log(food);
    return (
        <Col>
            <Card className="food-card shadow pb-3">

                <PhotoProvider>
                    <PhotoView src={photoUrl}>
                        <img className="card-image p-3" src={photoUrl} alt="" />
                    </PhotoView>
                </PhotoProvider>
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
                    <Button className="w-100 fw-semibold" variant="primary">Show Details</Button>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default FoodCard;