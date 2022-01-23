import React from "react";
import './Card.css';
import Cardbox from "../About/Cardbox";
import bottom from "../../asserts/images/brush-top-alt.png";
import about_image1 from "../../asserts/images/about-card-1.gif";
import about_image2 from "../../asserts/images/about-card-2.gif";
import about_image3 from "../../asserts/images/about-card-2.gif";





export const Card = () => {
    return (
        <>
        <div className="uk-container">
            <div className="about-section2">
            <center><h1><b>Our mission</b></h1></center>
            <div class="uk-column-1-3@m full">
            <div className="ccard1">
            <Cardbox image={about_image1} name="Taking responsibility" />
            </div>
            <div className="ccard2">
            <Cardbox image={about_image2} name="Mobilising Potential" />
            </div>
            <div className="ccard3">
            <Cardbox image={ about_image3} name="Inspiring Collective Action" />
            </div>
            
            </div>
           
            
            
           

            

            

            </div>
           
            
        </div>
        <div>
        <img src={ bottom } className="second-card"></img>
        </div>
        
        </ >
    )
}

export default Card;