import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/Logo/logo.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 border-top">
                    <div className="col mb-3">
                        <Link to="/" className='d-flex align-items-center text-decoration-none text-white'>
                            <img className="logo-img me-2 bg-light" src={logo} alt="" />
                            <span className="fw-semibold fs-5">Dream Kitchen</span>
                        </Link>
                        <p className="fs-6 mt-1">Kitchen is one of my favourite place. Where I spent most of my free time. It's give me pleasure.</p>
                    </div>

                    

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;