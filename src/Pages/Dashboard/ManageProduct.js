import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageProduct = () => {
    const [products, setProducts] = useState('');
    useEffect(() => {
        fetch("https://arcane-waters-84543.herokuapp.com/tool")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDlt = id => {
        const confirmation = window.confirm("are you sure, you want to delete this product...?")
        if (confirmation) {
            fetch(`https://arcane-waters-84543.herokuapp.com/tool/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => toast.warning("Product deleted successfully."))
        }
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
                                <td className='text-primary'>{index + 1}</td>
                                <td>{a.name}</td>
                                <td className='btn text-primary' onClick={() => handleDlt(a._id)}>X</td>
                            </tr>)
                        }
                        <ToastContainer></ToastContainer>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;