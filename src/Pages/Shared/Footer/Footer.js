import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/Logo/logo.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5">
                    <div className="col mb-3">
                        <Link to="/" className='d-flex align-items-center text-decoration-none text-white'>
                            <img className="logo-img me-2 bg-light" src={logo} alt="" />
                            <span className="fw-semibold fs-5">Dream Kitchen</span>
                        </Link>
                        <p className="fs-6 mt-1">Kitchen is one of my favourite place. Where I spent most of my free time. It's give me pleasure.</p>
                    </div>



                    <div className="col mb-3">
                        <h5>Useful Link</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-white">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-white">All Foods</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-white">Blog</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-white">About Me</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Address</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                9 No. Road Mirpur <br />
                                Sector #7, Opsite of <br />
                                Jakir Mention, Dhaka.
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Contact Me</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                admin@dreamkitch.com
                            </li>
                            <li className="nav-item mb-2">
                                +880 1847462965
                            </li>
                            <li className="nav-item mb-2">
                                +880 1807422959
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
            <div className="footer-border">
                <p className="m-0 text-center py-2">&copy; 2022, All rights reserved <span className="text-primary">Dream Kitch</span></p>
            </div>
        </div>
    );
};

export default Footer;