import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myTools, setMyTools] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyTools(data))
        }
    }, [user])
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
                            myTools.map((a, index) => <tr>
                                <td>{index + 1}</td>
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

export default MyOrders;