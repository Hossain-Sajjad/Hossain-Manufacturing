import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, description, minimumQuantity, availableQuantity, price, img } = tool;
    const navigate = useNavigate()
    const navigateToItemUpdate = id => {
        navigate(`/home/${id}`);
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='truncate'>{description}</p>
                    <p><strong>Price Per Unit : </strong>{price} $</p>
                    <p><strong>Avaialble Quantity : </strong>{availableQuantity}</p>
                    <p><strong>Minimum Order Quantity : </strong>{minimumQuantity}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary text-white" onClick={() => navigateToItemUpdate(tool._id)}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;