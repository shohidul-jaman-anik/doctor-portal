import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const handleForm = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot)

        const BookingData = {
            // treatmentId: _id,
            // treatment: name,
            // date: treatmentDate,
            // slot,
            // userName: user.displayName,
            // userEmail: user.email,
            // phone: event.target.phone.value,
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        console.log(BookingData)

        const url = "http://localhost:5000/booking"
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(BookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set , ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appintmnt on ${data.BookingData?.date} at ${data.BookingData?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name} !</h3>
                    <form onSubmit={handleForm} className='grid  grid-cols-1 gap-4 justify-items-center mt-4'>
                        <input disabled type="text" value={formattedDate} className="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" className="select select-bordered select-secondary w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>
                                    {slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;