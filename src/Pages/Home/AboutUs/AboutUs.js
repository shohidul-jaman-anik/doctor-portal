import React from 'react';
import img1 from '../../../assets/Home/9.JPG'


const AboutUs = () => {
    return (
        <div className="card lg:card-side bg-base-100 my-20">
            <div
                className="relative overflow-hidden bg-no-repeat bg-cover "
                data-aos="fade-down-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
            >
                <img style={{ width: "200rem" }} src={img1} className="hover:scale-110 transition duration-300 ease-in-out " alt="Louvre" />
            </div>

            <div className="card-body"
                data-aos="fade-down-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
            >
                <h2 className="card-title">Welcome to Doctor Portal</h2>
                <p>Established in 2002, Doctor Portal is an advanced tertiary care, multi-specialty hospital equipped with 54 beds and spread over an area of 15000 sq. ft. situated at the prime location in Plot No. 2, Jatrabari, Dhaka. The Hospital is augmented with the state-of-the-art-facilities that facilitate speedier diagnosis and efficient treatment. Our team of highly dedicated professionals works in an environment that enables them to deliver the highest quality of healthcare services.</p>
            </div>
        </div>
    );
};

export default AboutUs;