import React, { useEffect, useState } from 'react';
import User from './User';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://arcane-waters-84543.herokuapp.com/user")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-primary'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User
                                key={user._id}
                                user={user}
                            ></User>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;