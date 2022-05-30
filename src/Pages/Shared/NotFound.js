import React from 'react';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr_kxHMdAWeIxrfBFaY9Zj8zRbJjwEM_xXQ&usqp=CAU" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">404</h1>
                    <p class="py-6">The page you are looking for is not founded.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;