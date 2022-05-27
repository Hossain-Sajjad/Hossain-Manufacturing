import React from 'react';

const Tool = ({ tool }) => {
    const { name, description, minimumQuantity, availableQuantity, price, img } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <figure class="px-10 pt-3">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <p>{description}</p>
                <p>Minimum Quantity: {minimumQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Price Per Unit {price}$</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;