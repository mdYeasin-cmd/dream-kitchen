import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div className="form-container shadow p-4 my-5 mx-auto rounded">
            <h2 className="text-center mb-3 services-title w-50 mx-auto py-1 rounded">Registration</h2>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button className="fw-semibold w-25" variant="primary" type="submit">
                        Registration
                    </Button>
                </div>
            </Form>

            <div>
                <p className="text-center mt-3">
                    <small>Already have an account? <Link className="text-decoration-none" to="/login">Log In</Link></small>
                </p>
            </div>

        </div>
    );
};

export default Registration;