import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './LogIn.css';

const LogIn = () => {

    const { logIn, providerLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error));

    }

    const handleSignInWithGoogle = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="form-container shadow p-4 my-5 mx-auto rounded">

            <h2 className="text-center mb-3 services-title w-50 mx-auto py-1 rounded">Log In</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <div className="text-center">
                    <Button className="px-3 fw-semibold" variant="primary" type="submit">
                        Log In
                    </Button>
                </div>
            </Form>

            <div className="text-center mt-3">
                <span className="or-line fw-semibold">OR</span>
            </div>

            <div className="text-center mt-3">
                <button onClick={handleSignInWithGoogle} className="social-login-btn">
                    <FcGoogle></FcGoogle>
                </button>
            </div>

            <div>
                <p className="text-center mt-3">
                    <small>Don't have an account? <Link className="text-decoration-none" to="/registration">Registration</Link></small>
                </p>
            </div>

        </div>
    );
};

export default LogIn;