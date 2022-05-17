import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor culpa dignissimos deserunt vero! Vero!',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor culpa dignissimos deserunt vero! Vero!',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor culpa dignissimos deserunt vero! Vero!',
            img: Whitening,
        },
    ]
    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='text-primary font-bold text-xl '>Our Services  </h3>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;