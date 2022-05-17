import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Info from '../Information/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='px-8'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;