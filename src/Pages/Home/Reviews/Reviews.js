import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='my-8'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    review && review.map(r => <Review
                        key={r._id}
                        review={r}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;