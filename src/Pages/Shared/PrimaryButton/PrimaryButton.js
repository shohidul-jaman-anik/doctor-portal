import React from 'react';
import './PrimaryButton.css'


const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button
            data-aos="zoom-in"
            className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary ">{children}</button>
        </div>
    );
};

export default PrimaryButton;


