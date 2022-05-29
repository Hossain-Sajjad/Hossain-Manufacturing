import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import 'swiper/css';

const Review = ({ review }) => {

    const { description, ratings, name } = review;
    return (
        <div className="card h-[250px] bg-base-100 shadow-xl my-12">
            <div className="card-body text-center">
                <p>{description}</p>
                <div className="text-center">
                    <h4 className='text-xl text-primary'>{name}</h4>
                    <StarRatings
                        rating={parseInt(ratings)}
                        numberOfStars={5}
                        starDimension="20px"
                        starRatedColor="goldenrod"
                        starSpacing="15px"
                    />
                </div>
            </div>
        </div>
    );
};

export default Review;