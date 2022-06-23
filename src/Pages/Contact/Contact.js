import React from 'react';
import ContactUs from '../Home/ContactUs/ContactUs';
import img1 from "../../assets/Doctors/img4.jpg"


const Contact = () => {
    return (
        <div>
            <div className='flex my-10'>
                <div>
                    <ol class="border-l border-gray-300 col-span-5">
                        <li>
                            <div class="flex flex-start items-center pt-3">
                                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                                <p class="text-gray-500 text-sm">01.07.2021</p>
                            </div>
                            <div class="mt-0.5 ml-4 mb-6">
                                <h4 class="text-gray-800 font-semibold text-xl mb-1.5">Doctor Portal</h4>
                                <p class="text-gray-500 mb-3">Plot No. 2, Sector-8, Phase - II, Near Rajiv Gandi Bridge Nerul (W), Navi Jatrabari, Dhaka.</p>
                            </div>
                        </li>
                        <li>
                            <div class="flex flex-start items-center pt-2">
                                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                                <p class="text-gray-500 text-sm">13.09.2021</p>
                            </div>
                            <div class="mt-0.5 ml-4 mb-6">
                                <h4 class="text-gray-800 font-semibold text-xl mb-1.5">Contact Info</h4>
                                <h3 class="text-gray-500 mb-3">
                                    Tel : 82874349##
                                </h3>
                                <h3 class="text-gray-500 mb-3">
                                    Fax : 2772198##
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div class="flex flex-start items-center pt-2">
                                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                                <p class="text-gray-500 text-sm">25.11.2021</p>
                            </div>
                            <div class="mt-0.5 ml-4 pb-5">
                                <h4 class="text-gray-800 font-semibold text-xl mb-1.5">Gmail</h4>
                                <p class="text-gray-500 mb-3">
                                    doctorportal@gmail.com
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className='col-span-7'>
                    <img src={img1} alt="" />
                </div>
            </div>

            <ContactUs></ContactUs>
        </div>
    );
};

export default Contact;