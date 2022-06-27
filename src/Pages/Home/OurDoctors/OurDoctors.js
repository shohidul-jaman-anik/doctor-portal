
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './OurDoctors.css'
import Typed from 'react-typed';

import React, { Component } from "react";
import Slider from "react-slick";

import img1 from "../../../assets/Doctors/img1.jpg"
import img2 from "../../../assets/Doctors/img2.jpg"
import img3 from "../../../assets/Doctors/img3.jpg"
import img4 from "../../../assets/Doctors/img4.jpg"
import img5 from "../../../assets/Doctors/img5.jpg"
import img6 from "../../../assets/Doctors/img6.jpg"

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          };
        return (
            <div className="my-16  bg-slate-500 w-auto py-16 pb-28">
                <div className="title-contaier">
                    <h1>
                        <Typed className="main-title text-primary"
                            strings={[
                                'Our Doctors'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                        </Typed>

                    </h1>
                    {/* <div><img src={img} alt="" /></div> */}
                </div>

                <Slider {...settings} >
                    
                    <div className="slider-container">
                        <h3 className="slider-title">Dr. William A. Abdu, M.S.</h3>
                        <p className="text-center text-secondary designation">Dental</p>
                        <img className="slider-img" src={img1} alt="" />

                        {/* <button className="drDetailsBtn font-bold text-white bg-gradient-to-r from-secondary to-primary px-3 mt-2 py-1 rounded-lg flex items-center ml-24">Explore more</button> */}
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Dr. Myles. B. Abbott, M.D</h3>
                        <p className="text-center text-secondary designation">Gynecologist</p>
                        <img className="slider-img" src={img2} alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Dr. Fouad. M. Abbas, M.D.</h3>
                        <p className="text-center text-secondary designation">Physiotherapyest</p>
                        <img className="slider-img" src={img3} alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Dr. Mona.M.Abaza, M.D.</h3>
                        <p className="text-center text-secondary designation">Orthopedics</p>
                        <img className="slider-img" src={img4} alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Dr. Khalid Abbed, M.D.</h3>
                        <p className="text-center text-secondary designation">Neurology</p>
                        <img className="slider-img" src={img5} alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Dr. Arthur Reese Abright</h3>
                        <p className="text-center text-secondary designation">Cosmetology</p>
                        <img className="slider-img" src={img6} alt="" />
                    </div>

                </Slider>
            </div>
        );
    }
}