import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { AuthToken } from '../../../utilities/AuthToken';
import Loading from '../../Shared/Loading/Loading';
import './Registration.css';

const Registration = () => {

    const { createUser, profileUpdate, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                if(loading) {
                    return <Loading></Loading>
                }
                const user = result.user;
                AuthToken(user);
                console.log(user);
                profile(name, photoURL)
                navigate('/');
            })
            .catch(error => console.error(error));

    }

    const profile = (name, photoURL) => {

        const profileInfo = {
            displayName: name,
            photoURL: photoURL
        }

        profileUpdate(profileInfo)
        .then(() => {
            console.log('Profile updated');
        })
        .catch(error => console.error(error));

    }

    return (
        <div className="form-container shadow p-4 my-5 mx-auto rounded">
            <h2 className="text-center mb-3 services-title w-50 mx-auto py-1 rounded">Registration</h2>
            <Form onSubmit={handleRegistration}>

                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3">
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