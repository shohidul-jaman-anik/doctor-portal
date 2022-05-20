import is from 'date-fns/esm/locale/is/index.js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>My appointment {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {appointments.map(appointment => <tr>
                            <th>{appointment.userName}</th>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.userName}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;