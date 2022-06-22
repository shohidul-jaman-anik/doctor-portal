import React from 'react';
import './Review.css'

const Review = ({ studentReview }) => {

    
    return (
        <div>
            <div className='review-section shadow-sm '>
                <div className='student-info '>
                    <img src={studentReview.userImg} alt="" />
                    <div className='review-main'>
                        <h2>{studentReview.name}</h2>
                        <h1 className='fs-6'>Ratings : {studentReview.ratings}⭐</h1>
                    </div>
                </div>
                <p className='text-start'>{studentReview.reviews}</p>
            </div>
          
        </div>
    );
}


export default Review;