import React from 'react';

const Tool = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">

            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <figure class="px-10 pt-3">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;