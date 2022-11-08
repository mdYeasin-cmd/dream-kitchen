import React from 'react';
import Banner from '../Banner/Banner';
import DeliciousRecipies from '../DeliciousRecipies/DeliciousRecipies';
import Reputation from '../Reputation/Reputation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DeliciousRecipies></DeliciousRecipies>
            <Reputation></Reputation>
        </div>
    );
};

export default Home;