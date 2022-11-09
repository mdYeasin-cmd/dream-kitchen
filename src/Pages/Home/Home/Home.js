import React from 'react';
import Banner from '../Banner/Banner';
import DeliciousRecipies from '../DeliciousRecipies/DeliciousRecipies';
import FoodBlog from '../FoodBlog/FoodBlog';
import Reputation from '../Reputation/Reputation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DeliciousRecipies></DeliciousRecipies>
            <Reputation></Reputation>
            <FoodBlog></FoodBlog>
        </div>
    );
};

export default Home;