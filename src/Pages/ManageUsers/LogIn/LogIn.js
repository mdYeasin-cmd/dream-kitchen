import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { AuthToken } from '../../../utilities/AuthToken';
import Loading from '../../Shared/Loading/Loading';
import './LogIn.css';

const LogIn = () => {

    useTitle('Log In - Dream Kitchen')
    const { logIn, providerLogIn, loading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        logIn(email, password)
            .then(result => {
                if(loading) {
                    return <Loading></Loading>
                }
                const user = result.user;
                AuthToken(user);
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));

    }

    const handleSignInWithGoogle = () => {
        providerLogIn(googleProvider)
            .then(result => {
                if(loading) {
                    return <Loading></Loading>
                }
                const user = result.user;
                AuthToken(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="form-container shadow p-4 my-5 mx-auto rounded">

            <div className="auth-card">
                <div className="auth-header text-center">
                    <h2 className="services-title auth-title mx-auto py-1 rounded">Log In</h2>
                    <p className="text-muted mb-0">Welcome back. Let’s continue cooking.</p>
                </div>

                <Form className="auth-form" onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="auth-actions text-center">
                        <Button className="fw-semibold auth-submit" variant="primary" type="submit">
                            Log In
                        </Button>
                    </div>
                </Form>

                <div className="text-center mt-4">
                    <span className="or-line fw-semibold">OR</span>
                </div>

                <div className="text-center mt-3">
                    <button onClick={handleSignInWithGoogle} className="social-login-btn">
                        <FcGoogle></FcGoogle>
                    </button>
                </div>

                <div>
                    <p className="text-center mt-4">
                        <small>Don't have an account? <Link className="text-decoration-none" to="/registration">Registration</Link></small>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LogIn;
