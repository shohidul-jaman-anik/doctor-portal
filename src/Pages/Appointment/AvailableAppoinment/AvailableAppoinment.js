import React from 'react';

const AvailableAppoinment = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card  bg-base-100 shadow-md">
                <div className="card-body text-center">
                    <h2 className=" text-secondary font-bold text-xl">{name}</h2>
                    <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>Try Another Date</span>}</p>

                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>

                    <div className="card-actions justify-center">
                        <label htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary">Book  Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppoinment;