import React from 'react';
import './Banner.css'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import './Banner.css'

const Banner = () => {
    return (

        <div className="hero bannerImg">

            <div className='bannerDescription'>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>

        </div>
    );
};

export default Banner;