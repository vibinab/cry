import React from 'react'
import image11 from '../../asserts/images/f1.jpg';
import image12 from '../../asserts/images/f2.jpg';
import image13 from '../../asserts/images/f3.jpg';
import bt from '../../asserts/images/brush-top-alt.png';
import sign from '../../asserts/images/rippan-sig.jpg';

import './bottom1.css';
import img101 from '../../asserts/images/home-bottom-banner.jpg';

export const bottom = () => {
    return (
       <>
       <div className="uk-conatiner-expand signature">
           <span style={{fontFamily:"serif"}}><i class="fa fa-quote-left" aria-hidden="true"></i></span>
           <p className="sign-para" >If we all do Something, then together there is no problem that we cannot solve!</p>
           <img src={sign} alt="sign"></img>
           <p className="sign-author">Rippan Kapur</p>
           <p className="founder">FOUNDER, CHILD RIGHTS AND YOU</p>

       </div>
       <div className="uk-container-expand">
           <div class="bi">
           <img  src={img101} ></img>
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
               <p style={{width:"80%"}}>All our efforts are made possible only because of your support</p>

           </div>
           <div className="logo1">
               <span><img src={image12} alt="icon2" className="fi" width="50" ></img></span>
               <p style={{width:"80%"}}>Your donation are tax exempted under 80G of the indian income tax act</p>
               
            </div>
            <div className="logo1">
                <span><img src={image13} alt="icon3" className="fi" width="50"></img></span>
                <p style={{width:"80%"}}>Your donation transaction are completely safe and secure</p>
               
            </div>
        </div>
       </div>
       
       
       </div>
      

       </>
    )
}

export default bottom;