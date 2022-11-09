import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';

const WriteReview = ({ id }) => {



    const { user } = useContext(AuthContext);
    const location = useLocation();

    const handleReview = (event) => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;
        console.log(reviewText);

        const reviewerInfo = {
            email: user.email,
            serviceId: id,
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
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <h2 className="text-center my-4 services-title">Review</h2>
            <div className="container">
                {
                    user && user.uid ?
                        <>
                            <h3 className="fw-semibold fs-5">Please write your review here</h3>
                            <Form onSubmit={handleReview}>

                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={6} placeholder="Write Message" name="reviewText" />
                                </Form.Group>

                                <Form.Group className="mb-3 d-flex justify-content-center">
                                    <Form.Control className="btn btn-primary fw-semibold w-25" type="submit" value="Send" />
                                </Form.Group>

                            </Form>
                        </> :
                        <>
                            <div className="mb-4">
                                <span className="fs-5 fw-semibold">Please Log In first to write a review.</span>
                                <NavLink to="/login" state={{ from: location }} replace>
                                    <Button className="ms-3 fw-semibold" variant="primary">Log In</Button>
                                </NavLink>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default WriteReview;