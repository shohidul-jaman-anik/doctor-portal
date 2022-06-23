import React from 'react';

const InfoCard = ({img,cardTitle,description,bgClass}) => {
    return (
        <div >
            <div 
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
            
            className={`card lg:card-side shadow-xl bg-slate-500 ${bgClass} `
            
            }>
                <figure className='pl-4'>
                    <img src={img} alt="Album" />
                    </figure>
                <div className="card-body text-white" >
                    <h2 className="card-title ">{cardTitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;