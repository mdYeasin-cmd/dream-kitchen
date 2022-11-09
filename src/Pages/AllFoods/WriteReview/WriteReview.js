import React from 'react';
import Form from 'react-bootstrap/Form';

const WriteReview = () => {

    const handleReview = (event) => {
        event.preventDefault();
        const reviewText = event.target.reviewText.value;
        console.log(reviewText);
    }

    return (
        <div>
            <h2 className="text-center my-4 services-title">Review</h2>
            <div className="container">
                <h3 className="fw-semibold fs-5">Please write your review here</h3>
                <Form onSubmit={handleReview}>
                    
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={6} placeholder="Write Message" name="reviewText" />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-center">
                        <Form.Control className="btn btn-primary fw-semibold w-25" type="submit" value="Send" />
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
};

export default WriteReview;