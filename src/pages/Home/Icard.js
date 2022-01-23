import React from 'react';
import './Icard.css';
import Icardbox from './Icardbox';
import icon1 from '../../asserts/images/icon1.png';
import icon2 from '../../asserts/images/icon2.png';
import icon3 from '../../asserts/images/icon3.png';


export const Icard = () => {
    return (
        <>
        <div className="uk-container card-m">
        <h2 className="head"><b>This is the impact <span style={{color:"yellow"}}>YOU</span> helped us achieve in 2020-21</b></h2>
        <div className="main">
            
        <div className="uk-column-1-3@m  icon-full-card">
            <div className="card1">
                <Icardbox image={icon1} heads="6,61,752"  text="children impacted overall" />
            </div>
           
            <div className="card2">
            <Icardbox image={icon2} heads="1,46,467" text="children in CRY project areas, between the ages of 6-18 years, in school" />

            </div>
            <div className="card3">
            <Icardbox image={icon3} heads="9,652" text="children in CRY project areas, under the age of 1 year, immunized"/>
            </div>
        </div>
        </div>

        
        </div>
            
        </>
    )
}


export default Icard;