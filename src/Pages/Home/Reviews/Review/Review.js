import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Review = ({ review }) => {
    const [user, loading] = useAuthState(auth);
    const { description, ratings } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <p>{description}</p>
                <div className="text-center">
                    <h4 className='text-xl text-primary'>{user.displayName}</h4>
                    <p>{ratings}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;