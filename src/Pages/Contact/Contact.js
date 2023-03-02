import React from 'react';
// import ContactUs from '../Home/ContactUs/ContactUs';
import './Contact.css'

const Contact = () => {
    return (
        // <div>
        //     <div class="contactInfo" >
        //         <div>
        //             <ol className="">
        //                 <li>
        //                     <div className="mt-0.5 ml-4 mb-6">
        //                         <h4 className="text-secondary font-semibold text-xl mb-1.5">Health Solution</h4>
        //                         <p className="text-gray-500 mb-3">Plot No. 2, Sector-8, Jatrabari, Dhaka.</p>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <div className="mt-0.5 ml-4 mb-6">
        //                         <h4 className="text-secondary font-semibold text-xl mb-1.5">Contact Info</h4>
        //                         <h3 className="text-gray-500 mb-3">
        //                             Tel : 82874349##
        //                         </h3>
        //                         <h3 className="text-gray-500 mb-3">
        //                             Fax : 2772198##
        //                         </h3>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <div className="mt-0.5 ml-4 pb-5">
        //                         <h4 className="text-secondary font-semibold text-xl mb-1.5">Gmail</h4>
        //                         <p className="text-gray-500 mb-3">
        //                             Health Solution@gmail.com
        //                         </p>
        //                     </div>
        //                 </li>
        //             </ol>
        //         </div>
        //         <div>
        //             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0441802218747!2d90.43218551475132!3d23.710116284609253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cbc59133f5%3A0x1496634384d98b5c!2sJatrabari%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1656486154606!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        //         </div>
        //     </div>

        //     <ContactUs></ContactUs>
        // </div>
        <div class="text-gray-600 body-font relative">
            <div class="absolute inset-0 bg-gray-300">
                <iframe  width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69520.62779969179!2d90.41344474528559!3d23.685686125404594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1664301380554!5m2!1sen!2sbd" ></iframe>
            </div>
            <div class="container px-5 py-24 mx-auto flex">
                <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Send  us your feedback</p>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;