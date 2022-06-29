import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import contact from '../../../assets/images/appointment.png'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();


    const onSubmit = data => {

        emailjs.sendForm('service_86b3elp', 'template_rdz4g4h', form.current, 'gJkpNWd5WX7H7BjUB')
            .then((result) => {
                // console.log(result.text);
                toast.success("Message send Sucessfully")
            }, (error) => {
                // console.log(error.text);
                toast.error("Message did't send")
            });
        reset()
    }

    return (
        <div style={{
            background: `url(${contact})`,
            backgroundRepeat: 'no-repeat',
        }}
            data-aos="fade-zoom-in"
        >
            <div className='text-center '>
                <h3 className='text-primary font-bold '>Contact</h3>
                <h1 className='text-3xl text-white'>Stay conected with us</h1>
            </div>
            <div className='flex justify-center'>
                <div></div>
                <form className=' my-4' ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-0.5 w-72 ' placeholder='Enter Your E-mail ' required {...register("email")} /> <br />
                    <input className='my-0.5 w-72 ' required placeholder='Enter Your Subject' {...register("subject")} /> <br />
                    <input className='my-0.5 w-72 ' required placeholder='Enter Your Age' type="number" {...register("age", { min: 18, max: 99 })} /> <br />
                    <textarea className='my-0.5 w-72 h-32' placeholder='Enter Your Message' required {...register("messeage")} /> <br />
                    {/* <input className='bg-primary px-8 py-3 text-white font-bold my-3  rounded-md ' type="submit" /> */}
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;