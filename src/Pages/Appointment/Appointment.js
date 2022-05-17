import React, { useState } from 'react';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;