import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState('');
    useEffect(() => {
        fetch("http://localhost:5000/tool")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDlt = id => {
        fetch(`http://localhost:5000/tool/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product name</th>
                            <th>Order Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((a, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{a.name}</td>
                                <td className='btn btn-primary text-white' onClick={() => handleDlt(a._id)}>X</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;