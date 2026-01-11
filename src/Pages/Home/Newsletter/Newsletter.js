import React from 'react';
import './Newsletter.css';
import ReusableButton from '../../Shared/ReusableButton/ReusableButton';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="newsletter-card shadow p-4 p-md-5 rounded">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-7">
                            <h2 className="section-title mb-3">Newsletter</h2>
                            <p className="section-lede mb-0">
                                Get fresh recipes, cooking tips, and seasonal favorites delivered straight to your inbox every week.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <form className="newsletter-form d-flex flex-column flex-sm-row gap-2">
                                <input
                                    type="email"
                                    className="form-control newsletter-input"
                                    placeholder="Enter your email"
                                    aria-label="Email address"
                                />
                                <ReusableButton type="button" className="btn btn-primary fw-semibold">
                                    Subscribe
                                </ReusableButton>
                            </form>
                            <small className="text-muted d-block mt-2">No spam, just tasty updates.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
