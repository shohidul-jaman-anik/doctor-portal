import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointment from '../../../assets/images/chair.png'

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={appointment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;