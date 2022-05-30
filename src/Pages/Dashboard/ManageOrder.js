import React, { useEffect } from 'react';
import { useState } from 'react';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("https://arcane-waters-84543.herokuapp.com/allpurchase")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product name</th>
                            <th>Order Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((a, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{a.email}</td>
                                <td>{a.productName}</td>
                                <td>{a.quantity}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;