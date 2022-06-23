import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex items-center mt-16 p-3' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='font-bold text-primary'>Appointment</h3>
                <h1 className='font-bold text-3xl text-white'>Make an appointment today </h1>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cupiditate iusto accusamus! Quaerat quam consequatur tempora nihil aperiam necessitatibus. Ipsa laborum recusandae inventore mollitia tempore, officiis ex fugiat maiores vero!</p>
                <PrimaryButton>
                    <Link to="/appointment">Service Book</Link>
                </PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;