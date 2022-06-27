import React from 'react';
import Service from '../Service/Service'

import dental from '../../../assets/services/dental.svg'
import medicine from '../../../assets/services/General Medicine.svg'
import Phiseotherapy from '../../../assets/services/Phiseotherapy.svg'
import pregnent from '../../../assets/services/pregnent.svg'
import surgery from '../../../assets/services/Surgery.svg'
import urology from '../../../assets/services/urology.svg'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'General Medicine ',
            description: 'This field of medicine deals with non-surgical treatment of diseases by diagnosis through study and management with medication.',
            img: medicine,
        },
        {
            _id: 2,
            name: 'Physiotherapy',
            description: 'Physiotherapy is a health care profession which assists people to restore, maintain and maximize their strength, function, movement, and overall well-being.',
            img: Phiseotherapy,
        },
        {
            _id: 3,
            name: 'General Surgery',
            description: "Doctor portal is Best Hospital For General Surgery In Dhaka. At least a five-year general medical procedure residency should be finished.",
            img: surgery,
        },
        {
            _id: 4,
            name: 'Gynecologist',
            description: 'A gynecologist arrangement is exhorted for yearly screening and any time a lady has worries about manifestations like pelvic, vulvar, or vaginal torment or sporadic uterine dying.',
            img: pregnent,
        },
        {
            _id: 5,
            name: 'Dermotology & Cosmetology',
            description: 'Healthy skin and beautiful appearance symbolise health and self-nurture and gives a sense of confidence. Being the largest organ of body, skin deserves  to sustain optimal health.',
            img: urology,
        },
        {
            _id: 6,
            name: 'Dental treatments',
            description: 'Dental treatments are carried out by a dental team, which often consists of a dentist and dental auxiliaries (dental assistants, dental hygienists, dental technicians, as well as dental therapists).',
            img: dental,
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