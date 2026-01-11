import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { NavLink, useLocation } from 'react-router-dom';
import ReusableButton from '../../Shared/ReusableButton/ReusableButton';

const WriteReview = ({ handleReview }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

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
                                    <ReusableButton type="submit" className="btn btn-primary fw-semibold w-25">
                                        Send
                                    </ReusableButton>
                                </Form.Group>

                            </Form>
                        </> :
                        <>
                            <div className="mb-4">
                                <span className="fs-5 fw-semibold">Please Log In first to write a review.</span>
                                <NavLink to="/login" state={{ from: location }} replace>
                                    <ReusableButton className="btn btn-primary ms-3 fw-semibold">
                                        Log In
                                    </ReusableButton>
                                </NavLink>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default WriteReview;
