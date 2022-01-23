import React from 'react';
import './Card2.css';
import Cardbox2 from '../About/Cardbox2';
import img1 from '../../asserts/images/dte-logo.jpg';
import img2 from '../../asserts/images/ys-article-logo.jpg';
import img3 from '../../asserts/images/yka-logo.jpg';

export const Card2 = () => {
    return (
        <div className="uk-container ">
            <div className="card-head">
            <center><h3 style={{color:"black"}}><b>CRY In the Media</b></h3></center>
            <p>Our voice on children’s rights is regularly featured by leading newspapers and online mediums.<br/>
            Click to know more about our take o children's issues and how they can be solved</p>
            </div>
            <div className="uk-column-1-3@m second">
            <div className="mcard1">
                <Cardbox2 image={img1} date="29 DECEMBER 2020" para="Recalling 2020:How COVID-19 impacted kids" />
            </div>
            <div className="mcard2">
                <Cardbox2 image={img2} date="29 DECEMBER 2020" para="The joy of giving: What important lessons children can teach us about giving" />
            </div>
            <div className="mcard3">
                <Cardbox2 image={img3} date=" 05 DECEMBER 2020" para="Saluting Volunteerism. A Spirit that Defeated the Pandemic"/>
            </div>


            </div>
            <div className="card2-button">
            <center><button class="uk-button card2b">See All Our Articles</button></center>
            </div>
            <div className="uk-container uk-container-xsmall fsub1">
                
               <div className="fsub">
               <center> <h3><b>Our Financials</b></h3></center> 
               <p>As a custodian of public funds we ensure that all our finanical statement and 
                 and audited and all legal and statutory compliances are stringently adhered to</p>
               </div>
               <div className="card2-button">
            <center><button class="uk-button card2b1">View Our Reports</button></center>
            </div>
               
            </div>


        </div>
        
    )
}

export default Card2;