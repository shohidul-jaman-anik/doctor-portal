import React from 'react';
import { useForm } from "react-hook-form";
import contact from '../../../assets/images/appointment.png'
const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div style={{
            background: `url(${contact})`,
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='text-center '>
                <h3 className='text-primary font-bold'>Contact</h3>
                <h1 className='text-3xl text-white'>Stay conected with us</h1>
            </div>
            <div className='w-40 mx-auto'>
                <form className='my-4' onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-0.5' placeholder='Enter Your E-mail ' {...register("email")} /> <br />
                    <input className='my-0.5' placeholder='Enter Your Subject' {...register("subject")} /> <br />
                    <input className='my-0.5' placeholder='Enter Your Age' type="number" {...register("age", { min: 18, max: 99 })} /> <br />
                    <input className='my-0.5' placeholder='Enter Your Message' {...register("messeage")} /> <br />
                    <input className='bg-primary px-4 my-3  rounded-md ' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;