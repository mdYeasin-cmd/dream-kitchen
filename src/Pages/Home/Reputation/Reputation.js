import React from 'react';
import './Reputation.css';

const Reputation = () => {
    return (
        <div className="reputation-bg text-color d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="text-center">
                            <h4 className="reputation-title">5</h4>
                            <p className="fw-semibold fs-3">Years Experience</p>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="text-center">
                            <h4 className="reputation-title">100+</h4>
                            <p className="fw-semibold fs-3">Happy Customer</p>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="text-center">
                            <h4 className="reputation-title">100K</h4>
                            <p className="fw-semibold fs-3">Facebook Follower</p>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="text-center">
                            <h4 className="reputation-title">8</h4>
                            <p className="fw-semibold fs-3">Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reputation;