import React from 'react';
import './Topbanner.css'

const TopBanner = () => {
    return (
        <div className="hero min-h-screen top-banner">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Best Electronics Tools</h1>
                    <p className="mb-5">Get your desire electronics tool with best deal in the market.
                        We provide premium quality tools in excelent condition.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;