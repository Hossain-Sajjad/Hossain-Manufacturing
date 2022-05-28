import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <div class="stats stats-vertical lg:stats-horizontal h-[200px] mt-20 flex mx-auto  w-screen lg:max-w-screen-lg bg-primary text-white">

                <div class="stat">
                    <div class="stat-title text-white">Total Customer</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Customer</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Customer Retention</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;