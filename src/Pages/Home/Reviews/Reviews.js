import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import 'swiper/css';

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://arcane-waters-84543.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl font-bold text-center text-primary mt-12'>What People Say!</h3>
            <Swiper
                navigation={true} modules={[Navigation]} className="mySwiper"
            >
                {
                    review && review.map(r => <SwiperSlide> <Review
                        key={r._id}
                        review={r}
                    ></Review></SwiperSlide>)
                }
            </Swiper>
        </div>
        // <div className='my-8'>
        //     <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4'>
        //         {
        //             review && review.map(r => <Review
        //                 key={r._id}
        //                 review={r}
        //             ></Review>)
        //         }
        //     </div>
        // </div>
    );
};

export default Reviews;