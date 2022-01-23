
import img2 from "../../asserts/images/about-hero-banner.jpg";

import React from 'react';
import './About.css';


export const About = () => {
    return (
        <>
        <div class=" uk-container-expand">
            <div className="section1" >
                
                <h1><center><b>Our Vision</b></center></h1>
               <center> <hr className="line"></hr></center>
               <div class="para">
               <p > A happy healthy and creative child whose rights are protected and <br /> 
                honoured in a society that is bulit on respect for dignity , justice ad equity <br />
                for all
                </p>
               
                
               </div>
               
            </div>
        </div>
        <div class="uk-container-expand">
                <img src={img2 } alt="img" className="about-image" ></img>
                </div>
        </>
    )
}

export default About;