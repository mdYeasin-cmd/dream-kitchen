import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import DeliciousRecipies from '../DeliciousRecipies/DeliciousRecipies';
import FoodBlog from '../FoodBlog/FoodBlog';
import Newsletter from '../Newsletter/Newsletter';
import Reputation from '../Reputation/Reputation';
import SeasonalHighlights from '../SeasonalHighlights/SeasonalHighlights';
import './Home.css';

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
        </main>
    );
};

export default Home;
