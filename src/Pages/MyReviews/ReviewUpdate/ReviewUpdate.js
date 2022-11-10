import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const ReviewUpdate = () => {

    const review = useLoaderData();
    console.log(review)

    const handleReviewUpdate = event => {
        event.preventDefault();
        // const updatedReview = event.target.reviewText.value;
        // console.log(updatedReview);

        // fetch(`http://localhost:5000/reviews/${review._id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedReview)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .cathch(error => console.error(error));

    }

    return (
        <div>
            <div className="container">
                <h2>This is review update page</h2>
                <Form onSubmit={handleReviewUpdate}>

                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={6} placeholder="Write Message" name="reviewText" defaultValue={review.reviewText} />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-center">
                        <Form.Control className="btn btn-primary fw-semibold w-25" type="submit" value="Send" />
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
};

export default ReviewUpdate;