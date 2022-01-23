import React from 'react'
import './Card1.css';

import  Cardbox1 from "../About/Cardbox1";
import img10 from "../../asserts/images/best-campaign-in-communication-advocacy-category-2021.png";
import img11 from "../../asserts/images/best-campaign-in-not-for-profit-silver-kaliedo-2021.png";
import img12 from "../../asserts/images/acef-logo.jpg";
import img13 from "../../asserts/images/trustadvisory.jpg";

export const Card1 = () => {
    return (
        <>
        <div class="uk-container award">
        <center><h3 style={{color:"black"}}><b>Awards & Recognition</b></h3></center>
        <div style={{textAlign:"center"}} className="cry">
        <p>In over 4 decades CRY has received many awards in recognition of our <br/>word towards enabling better futures for underprivileged children</p>
        </div>
        <div class="uk-column-1-4@m box">
        <div className="acard1">
            <Cardbox1 image={img10} detail="Best Campagin in Communication & Advocacy Category" name="2021" />
        

        </div>
        <div className="acard2">
        <Cardbox1 image={img11}  detail="Best Campaign in Not-for-profit(Silver)" name="2021" />
                
        </div>
        <div className="acard3">
        <Cardbox1 image={img12} detail="Social Media Brand of the Year" name="2020" />
                
        </div>
        <div className="acard4">
        <Cardbox1 image={img13} detail="Most Trusted NGO" name="2020" />
                
        </div>
        </div>
        
        <div className="firstbutton">
        <center><button className="uk-button uk-button-default fb">See All our Awards</button></center>
        </div>


        
        


        </div>
            
        </>
    )
}

export default Card1;