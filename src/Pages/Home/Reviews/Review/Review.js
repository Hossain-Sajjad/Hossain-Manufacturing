import React from 'react';

const Review = () => {
    return (
        <div className='flex'>
            <div class="avatar h-24">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
            </div>
            <div className='ml-5'>
                <div>
                    <h3 className='text-3xl font-semibold'>Alexa Bhai</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non numquam doloribus consequuntur in autem eum placeat dolorem, culpa eius voluptatem!
                    </p>
                </div>
                <div class="rating rating-lg">
                    <input type="radio" name="rating-9" class="rating-hidden" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                </div>
            </div>
        </div>
    );
};

export default Review;