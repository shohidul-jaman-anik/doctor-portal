import React from 'react';
import { Link } from 'react-router-dom';
import quotes from '../../../assets/icons/quote.svg'
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import Review from '../Review/Review';


const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Harry willium',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor culpa dignissimos deserunt vero! Vero!',
            img: person1,
            address: 'Delhi'
        },
        {
            _id: 2,
            name: 'willium',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor culpa dignissimos deserunt vero! Vero!',
            img: person2,
            address: 'Dhaka'
        },
        {
            _id: 3,
            name: 'Harry willium',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor culpa dignissimos deserunt vero! Vero!',
            img: person3,
            address: 'California'
        },
    ]
    return (
        <div className='my-12'>
            <div className='flex justify-between '>
                <div>
                    <h3 className='text-primary font-bold'>Testmonials</h3>
                    <h1 className='text-3xl'>Whats Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quotes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
                <PrimaryButton >
                    <Link to="/reviews">Add Review</Link>
                    
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Reviews;