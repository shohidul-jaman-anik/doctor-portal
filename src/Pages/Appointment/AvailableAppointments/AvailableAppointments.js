import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointments = ({ date, setDate }) => {
    // const [services, setServices] = useState([])

    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://afternoon-mesa-24247.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>Available Appointments on {format(date, 'PP')}.</p>;
    }

    // useEffect(() => {
    //     fetch(`https://afternoon-mesa-24247.herokuapp.com/service`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])
    return (
        <div>
            <div>
                <p className='text-xl text-center mb-12'>You have selected <span className='text-secondary font-bold'>{footer}</span>.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service => <AvailableAppoinment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></AvailableAppoinment>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;