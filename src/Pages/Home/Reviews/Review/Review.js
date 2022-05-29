import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


const Review = ({ review }) => {

    const { description, ratings, name } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <p>{description}</p>
                <div className="text-center">
                    <h4 className='text-xl text-primary'>{name}</h4>
                    <p>{ratings}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;