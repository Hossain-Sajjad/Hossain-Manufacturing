import React from 'react';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';
import TopBanner from './TopBanner/TopBanner';

const home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Tools></Tools>
            <Reviews></Reviews>
        </div>
    );
};

export default home;