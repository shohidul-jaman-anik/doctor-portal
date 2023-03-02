import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, setUser, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://doctor-portal-server-wxo1.onrender.com/user/admin/${email}`, {
            method: "PUT",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                refetch()
                toast.success("Make admin sucessfully")
            })
    }

    const handleDelete = id => {
        // console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://doctor-portal-server-wxo1.onrender.com/user/${id}`
            // console.log(url)
            fetch(url, {
                method: "DELETE",

                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    const remaining = user.filter(u => u._id !== id)
                    setUser(remaining)
                    toast.success("Delete user sucessfully")
                })
        }
    }


    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-xs">Make Admin👨‍🎓</button>}</td>
            <td><button onClick={() => handleDelete(user._id)} className="btn btn-xs"> Remove User❌</button> </td>
        </tr>

    );
};

export default UserRow;