import React from 'react';

const Review = ({ review }) => {

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review.description}</p>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-3">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title">{review.name}</h2>
                            <h3>{review.address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;