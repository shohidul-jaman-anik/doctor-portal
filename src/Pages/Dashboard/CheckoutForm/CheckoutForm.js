import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';


const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { price, patient, patientName } = appointment

    useEffect(() => {
        fetch('https://afternoon-mesa-24247.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // set payment method : Like card
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // if(error){
        //     console.log(error)
        //     setCardError(error.message)
        // }
        // else{
        //     setCardError('')
        // }
        setCardError(error?.message || '')
        setSuccess('')
        // Confirm Card Payment
        const { paymentIntent, error: ententError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        Email: patientName,
                    },
                },
            },
        );
        if (ententError) {
            setCardError(ententError?.message)

        }
        else {
            setCardError('')
            setSuccess('Congrates! your payment is completed')
            console.log(paymentIntent)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn-primary btn-sm rounded-md mt-6' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            <div>
                {
                    cardError && <p className='text-red-500'>{cardError}</p>
                }
                {
                    success && <p className='text-green-500'>{success}</p>
                }
            </div>
        </div>
    );
};

export default CheckoutForm;