import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51L3fcoEWKrisGJtYob8a6cDmb8cQDJiHQja8FYNhPE5Q6xzS9z2pQsXrSBkS7VHmeDkwxOwXHV3LSypVWBiypVRL00Dv21O1PU');

const Payment = () => {
    const { id } = useParams()

    const url = `https://afternoon-mesa-24247.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>please pay for {id}</h1>
            <div className="card w-50 max-w-md bg-base-100 shadow-md  my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello,{appointment?.patientName} </p>
                    <h2 className="card-title">Please Pay for {appointment?.treatment}</h2>
                    <p>Please pay: $ {appointment?.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-md bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;