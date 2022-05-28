import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchaseTools = () => {
    const { id } = useParams();
    const [tool, setTool] = useState('');
    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <figure class="px-10 pt-3">
                        <img src={tool.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <p>{tool.description}</p>
                    <p>Minimum Quantity: {tool.minimumQuantity}</p>
                    <p>Available Quantity: {tool.availableQuantity}</p>
                    <p>Price Per Unit {tool.price}$</p>
                </div>
            </div>

        </div>
    );
};

export default PurchaseTools;