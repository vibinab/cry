import React, { Component } from "react";
import Slider from "react-slick";
import { FaArrowCircleLeft } from '@react-icons/all-files/fa/FaArrowCircleLeft';
import { FaArrowCircleRight } from '@react-icons/all-files/fa/FaArrowCircleRight';

import imgslide1 from "../../asserts/images/slide1.jpg";
import imgslide2 from "../../asserts/images/slide2.jpg";
import imgslide3 from "../../asserts/images//slide3.jpg";

import ap from '../../asserts/images/approach-banner.jpg';


import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// const Previousbtn= (props) => {
//     console.log(props);
//     const {className, onClick} = props 
//     return (
//         <div className={className} onClick={onClick}>
//             <FaArrowCircleLeft style={{color:'black'}} />
//         </div>
//     );
// };

// const Nextbtn= (props) => {
//     console.log(props);
//     const {className, onClick} = props 
//     return (
//         <div className={className} onClick={onClick}>
//             <FaArrowCircleRight style={{color:'black'}} />
//         </div>
//     );
// };


const Carousel = () => {
    return (
        <>
        <div className="uk-container-expand car-main">
        <div className="banner-image1">
        <img src={ap} alt="banner"  />
        </div>
        <div className="banner-image2">
         <center><h2><b>Stories & Updates</b></h2></center>
        </div>
        
        </div>

        <div className="wholecar">
            <Slider>
            
            <div className="uk-column-1-2@m  main-slide">
            <div className="slide1">
                
                <h3><b>Protecting Underprivileged Communities During COVID-19</b></h3>
                <p><b>From relief measures like distributing hygiene kits and dry rations to planning for recovery and resilience, we’re acting to keep underprivileged children and their families safe during the Coronavirus pandemic.

                </b>  </p>
                  <button className="uk-button slide-button1">Know More</button>
            </div>
            <div className="slide2">
            <img src={imgslide1} alt=""  className="cimg" />
            </div>
            

            </div>
            <div className="uk-column-1-2@m main-slide1">
            <div className="slide11">
                <h3>CRY Is India’s Most Trusted NGO</h3>
                <p>As per the Trust Research Advisory Report 2018, CRY is found to be India’s most trusted non-profit brand. We’re grateful to all of you for placing your faith in us and our work every single day!</p>
                <button type="text"  className="uk-button slide-button1">Know More</button>  
                </div>
            <div className="slide22">
            <img src={imgslide2} alt=""  className="cimg" />
                </div>
            </div>

                    
                    
                   
                   

                
                
               
            
            </Slider>
        </div>
        </>
    )
}

export default Carousel;
