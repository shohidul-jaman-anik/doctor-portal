import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, setUser, refetch }) => {

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: "PUT",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success("Make admin sucessfully")

            })
    }
 

    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:5000/user/${id}`
            console.log(url)
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
            <td>{user.role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Make Admin👨‍🎓</button>}</td>
            <td><button onClick={() => handleDelete(user._id)} class="btn btn-xs"> Remove User❌</button> </td>
        </tr>

    );
};

export default UserRow;