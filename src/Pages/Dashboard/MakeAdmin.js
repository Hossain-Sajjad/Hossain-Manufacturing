import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
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
                            users.map((a, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{a.email}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;