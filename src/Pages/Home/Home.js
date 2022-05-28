import React from 'react';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';
import TopBanner from './TopBanner/TopBanner';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary/BusinessSummary';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;