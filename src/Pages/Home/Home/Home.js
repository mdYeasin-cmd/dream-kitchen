import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import DeliciousRecipies from '../DeliciousRecipies/DeliciousRecipies';
import FoodBlog from '../FoodBlog/FoodBlog';
import Newsletter from '../Newsletter/Newsletter';
import Reputation from '../Reputation/Reputation';
import SeasonalHighlights from '../SeasonalHighlights/SeasonalHighlights';
import './Home.css';
import ReusableButton from '../../Shared/ReusableButton/ReusableButton';

const Home = () => {

    useTitle('Home - Dream Kitchen')

    return (
        <main className="home-page">
            <section className="home-section home-hero">
                <Banner></Banner>
            </section>
            <section className="home-section home-recipes">
                <DeliciousRecipies></DeliciousRecipies>
            </section>
            <section className="home-section home-seasonal">
                <SeasonalHighlights></SeasonalHighlights>
            </section>
            <section className="home-section home-reputation">
                <Reputation></Reputation>
            </section>
            <section className="home-section home-blog">
                <FoodBlog></FoodBlog>
            </section>
            <section className="home-section home-newsletter">
                <Newsletter></Newsletter>
            </section>
            <section className="home-section home-contact">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Let’s Plan Your Next Feast</h2>
                        <p className="section-lede">
                            Share your vision, and we’ll craft a tailored menu that fits your occasion perfectly.
                        </p>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-5">
                            <div className="contact-details">
                                <h3 className="h4 fw-semibold mb-3">Connect with our culinary team</h3>
                                <p className="text-muted mb-4">
                                    From intimate gatherings to full-scale celebrations, Dream Kitchen is here to bring
                                    calm to the kitchen and flavor to the table.
                                </p>
                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <span className="contact-label">Call us</span>
                                        <span className="contact-value">(406) 555-0129</span>
                                    </li>
                                    <li>
                                        <span className="contact-label">Email</span>
                                        <span className="contact-value">hello@dreamkitchen.com</span>
                                    </li>
                                    <li>
                                        <span className="contact-label">Studio hours</span>
                                        <span className="contact-value">Mon - Sat • 9:00 AM - 6:00 PM</span>
                                    </li>
                                </ul>
                                <div className="contact-pill">Response within 24 hours</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <form className="contact-form" action="#">
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="contact-name">Full name</label>
                                        <input className="form-control" id="contact-name" placeholder="Jordan Lee" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" htmlFor="contact-email">Email address</label>
                                        <input className="form-control" id="contact-email" placeholder="you@email.com" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="contact-occasion">Event type</label>
                                        <input className="form-control" id="contact-occasion" placeholder="Anniversary dinner, brunch, celebration" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="contact-message">Details</label>
                                        <textarea
                                            className="form-control"
                                            id="contact-message"
                                            rows="4"
                                            placeholder="Tell us about guest count, flavors, and timing."
                                        ></textarea>
                                    </div>
                                    <div className="col-12 d-flex flex-column flex-sm-row gap-3 align-items-sm-center">
                                        <ReusableButton className="btn btn-primary fw-semibold">
                                            Send inquiry
                                        </ReusableButton>
                                        <span className="contact-note text-muted">We’ll follow up with menu ideas.</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;            
