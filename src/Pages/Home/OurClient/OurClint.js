import React from 'react';

const OurClint = () => {

    return (
        <div className='text-center'>
            <h1 className='text-center text-primary text-4xl mt-4 mb-4 font-semibold'>Our Happy Clients</h1>

            <div class="stats stats-vertical lg:stats-horizontal shadow max-w-7xl px-12 text-center">
                <div class="stat grid place-items-center">
                    <div class="stat-value px-4"><img src="https://lh3.googleusercontent.com/MjtSG3EvUfw_pqJKTeTr_rCQRP0h8N7-NEfHGuiiEh1zVRT_KLUZ8-yYhFFgUOAq_HAQMPLBc7JQtREiGZpfHJc0c8VccUASgV0Ocg=w512-l90-sg-rj-c0xffffff" alt="" /></div>
                </div>
                <div class="stat grid place-items-center">
                    <div class="stat-value px-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVxNE9Xt8S6ObbwcbsOsXpRsOj3JieEkrtw&usqp=CAU" alt="" /></div>
                </div>
                <div class="stat grid place-items-center">
                    <div class="stat-value px-4"><img src="data:image/png;base64,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" alt="" /></div>
                </div>
                <div class="stat grid place-items-center">
                    <div class="stat-value px-4"><img src="https://png.pngitem.com/pimgs/s/334-3342810_niche-logo-home-electronics-company-logo-hd-png.png" alt="" /></div>
                </div>
            </div>


        </div>
    );
};

export default OurClint;