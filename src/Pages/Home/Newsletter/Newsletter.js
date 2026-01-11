import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section py-5">
            <div className="container">
                <div className="newsletter-card shadow p-4 p-md-5 rounded">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-7">
                            <h2 className="fs-1">Newsletter</h2>
                            <p className="text-muted mb-0">
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
                                <button type="button" className="btn btn-primary fw-semibold">
                                    Subscribe
                                </button>
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
