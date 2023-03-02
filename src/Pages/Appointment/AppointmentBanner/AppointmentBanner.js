import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointment from '../../../assets/images/calender.png'
import './AppointmentBanner.css'
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={appointment} className="max-w-sm rounded-lg calenderImg" alt=''

                        data-aos="fade-left"
                    />

                    <div data-aos="fade-right">

                        <DayPicker mode="single"
                            selected={date}
                            onSelect={setDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                            styles={{
                                caption: { color: 'red' }
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;