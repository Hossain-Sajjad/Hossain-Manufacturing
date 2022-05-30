import React from 'react';

const Hero = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pcyUyMHRvb2x8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-3xl text-center font-bold uppercase">Hossain Manufacturing ltd.</h1>
                    <h1 class="text-xl text-center font-bold text-primary">Get Your Best Deal Here!</h1>
                    <p class="py-6 text-center">We believed in service. We help people to grow there business. That is the reason most of our customer keeps with us for rest of the time. Lets get together and make something big.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;