import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg d-flex justify-content-center align-items-center">
            <div className="text-white text-center w-75">
                <h1 className="banner-title">Knowledge and Fun with Different Ingredients</h1>
                <p className="banner-desc">Cooking demands attention, patience, and above all, a respect for the gifts of the earth. It is a form of worship, a way of giving thanks.</p>
                <div>
                    <button className="btn btn-primary fw-semibold mt-3">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;