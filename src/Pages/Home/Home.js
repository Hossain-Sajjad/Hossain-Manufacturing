import React from 'react';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';
import TopBanner from './TopBanner/TopBanner';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Tools></Tools>
            <Hero></Hero>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;