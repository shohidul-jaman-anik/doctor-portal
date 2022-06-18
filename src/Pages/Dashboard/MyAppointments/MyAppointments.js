
import {Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    const handleDelete = id => {
                console.log(id)
                const proceed = window.confirm('Are you sure ?')
        
                if (proceed) {
                    const url = `http://localhost:5000/booking/${id}`
                    console.log(url)
                    fetch(url, {
                        method: "DELETE",
                        body: JSON.stringify({ id })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const remaining = appointments.filter(p => p._id !== id)
                            setAppointments(remaining)
                        })
                }
            }

    return (
        <div>
            <h1>My appointment {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Delete Order</th>
                            <th>Paid Order</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td onClick={() => handleDelete(a._id)}> ❌ </td>
                                <td>
                               {(a.PPU && !a.paid)}&&<Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm'>💳</button></Link>
                                 {(a.PPU && a.paid)}&&<span className='text-success'>Paid</span>

                             </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;