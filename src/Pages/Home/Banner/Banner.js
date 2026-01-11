import React from 'react';
import './Banner.css';
import ReusableButton from '../../Shared/ReusableButton/ReusableButton';

const Banner = () => {
    return (
        <div className="banner-bg d-flex justify-content-center align-items-center">
            <div className="banner-content text-white text-center">
                <h1 className="banner-title">Knowledge and Fun with Different Ingredients</h1>
                <p className="banner-desc">
                    In cooking inspire me thie quote - <br />
                    Cooking demands attention, patience, and above all, a respect for the gifts of the earth. It is a form of worship, a way of giving thanks.
                </p>
                <div>
                    <ReusableButton className="btn-purchase fw-semibold mt-3">
                        Purchase Now
                    </ReusableButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
