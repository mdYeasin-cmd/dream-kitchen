import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import DeliciousRecipies from '../DeliciousRecipies/DeliciousRecipies';
import FoodBlog from '../FoodBlog/FoodBlog';
import Newsletter from '../Newsletter/Newsletter';
import Reputation from '../Reputation/Reputation';

const Home = () => {

    useTitle('Home - Dream Kitchen')

    return (
        <div>
            <Banner></Banner>
            <DeliciousRecipies></DeliciousRecipies>
            <Reputation></Reputation>
            <FoodBlog></FoodBlog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
