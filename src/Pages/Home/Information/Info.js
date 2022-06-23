import React from 'react';

import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>
            <InfoCard
                className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]' description='Sunday to Friday' cardTitle='Opening Hours' img={clock}
            >
            </InfoCard>

            <InfoCard
                bg className='bg-accent' description='Hasnabad  Keranigonj Dhaka' cardTitle='Visite Our Location' img={marker}
            >
            </InfoCard>

            <InfoCard
                bg className='bg-gradient-to-r from-secondary to-primary' description='Mob: +00 12 36 58  5757' cardTitle='Contact Us' img={phone}
            >
            </InfoCard>
        </div>
    );
};

export default Info;