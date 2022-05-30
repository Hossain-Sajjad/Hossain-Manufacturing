import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [myTools, setMyTools] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
        if (user) {
            fetch(`https://arcane-waters-84543.herokuapp.com/purchase?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
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