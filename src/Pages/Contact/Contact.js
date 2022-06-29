import React from 'react';
import ContactUs from '../Home/ContactUs/ContactUs';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div class="contactInfo" >
                <div>
                    <ol className="">
                        <li>
                            <div className="mt-0.5 ml-4 mb-6">
                                <h4 className="text-secondary font-semibold text-xl mb-1.5">Health Solution</h4>
                                <p className="text-gray-500 mb-3">Plot No. 2, Sector-8, Jatrabari, Dhaka.</p>
                            </div>
                        </li>
                        <li>
                            <div className="mt-0.5 ml-4 mb-6">
                                <h4 className="text-secondary font-semibold text-xl mb-1.5">Contact Info</h4>
                                <h3 className="text-gray-500 mb-3">
                                    Tel : 82874349##
                                </h3>
                                <h3 className="text-gray-500 mb-3">
                                    Fax : 2772198##
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="mt-0.5 ml-4 pb-5">
                                <h4 className="text-secondary font-semibold text-xl mb-1.5">Gmail</h4>
                                <p className="text-gray-500 mb-3">
                                    Health Solution@gmail.com
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0441802218747!2d90.43218551475132!3d23.710116284609253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cbc59133f5%3A0x1496634384d98b5c!2sJatrabari%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1656486154606!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <ContactUs></ContactUs>
        </div>
    );
};

export default Contact;