import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './FoodCard.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import ReusableButton from '../ReusableButton/ReusableButton';


const FoodCard = ({ food }) => {

    const { _id, foodName, photoUrl, price, description } = food;
    
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
                    <Link to={`/services/${_id}`}>
                        <ReusableButton className="btn btn-primary w-100 fw-semibold">
                            Show Details
                        </ReusableButton>
                    </Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default FoodCard;
