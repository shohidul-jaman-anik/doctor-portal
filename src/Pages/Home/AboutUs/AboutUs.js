import React from 'react';
import img1 from  '../../../assets/Home/9.JPG'


const AboutUs = () => {
    return (
        <div class="card lg:card-side bg-base-100 my-20">
            <div  class="relative overflow-hidden bg-no-repeat bg-cover ">
            {/* <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 bg-purple-700"></div> */}
                <img style={{width:"200rem"}} src={img1} class="hover:scale-110 transition duration-300 ease-in-out " alt="Louvre" />
                
            </div>

            <div class="card-body">
                <h2 class="card-title">Welcome to Doctor Portal</h2>
                <p>Established in 2002, New Manak Healthcare Hospital is an advanced tertiary care, multi-specialty hospital equipped with 54 beds and spread over an area of 15000 sq. ft. situated at the prime location in Nerul (W), Navi Mumbai. The Hospital is augmented with the state-of-the-art-facilities that facilitate speedier diagnosis and efficient treatment. Our team of highly dedicated professionals works in an environment that enables them to deliver the highest quality of healthcare services.</p>
            </div>
        </div>
    );
};

export default AboutUs;