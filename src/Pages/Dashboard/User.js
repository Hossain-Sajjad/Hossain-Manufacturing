import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const User = ({ user }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        const confirmation = window.confirm("are you sure, you want to make this user admin...?")
        if (confirmation) {
            fetch(`https://arcane-waters-84543.herokuapp.com/user/admin/${email}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Successfully made an admin');
                    }
                })
        }

    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-primary text-white font-bold btn-xs">Make Admin</button>}</td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default User;