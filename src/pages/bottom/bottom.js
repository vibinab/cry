import React from 'react'
import image11 from '../../asserts/images/f1.jpg';
import image12 from '../../asserts/images/f2.jpg';
import image13 from '../../asserts/images/f3.jpg';
import bt from '../../asserts/images/brush-top-alt.png';

import './bottom.css';
import img100 from '../../asserts/images/about-approach-banner.jpg';

export const bottom = () => {
    return (
       <>
       <div className="uk-container-expand ">
           <div class="bi">
           <img  src={img100} ></img>
           </div>
           

       </div>
       <div className="uk-container-expand">
       <img src={bt} className="b-image "></img>
       </div>

       <div className="uk-container">
      
           <div className="whole">
           <div className="uk-column-1-3@m">
           <div className="logo1">
               <span><img src={image11} alt="icon1" className="fi" width="50" ></img></span>
               <p style={{width:"55%"}} className="bicon">All our efforts are made possible only because of your support</p>

           </div>
           <div className="logo1">
               <span><img src={image12} alt="icon2" className="fi" width="50" ></img></span>
               <p style={{width:"55%"}}  className="bicon">Your donation are tax exempted under 80G of the indian income tax act</p>
               
            </div>
            <div className="logo1">
                <span><img src={image13} alt="icon3" className="fi" width="50"></img></span>
                <p style={{width:"55%"}}  className="bicon">Your donation transaction are completely safe and secure</p>
               
            </div>
        </div>
       </div>
       
       
       </div>
      

       </>
    )
}

export default bottom;