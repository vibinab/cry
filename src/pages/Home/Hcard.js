import React from 'react'
import './Hcard.css';
import  Hcardbox  from '../Home/Hcardbox';
import c1 from '../../asserts/images/c11.gif';
import c2 from '../../asserts/images/c12.gif';
import c3 from '../../asserts/images/c13.gif';
import c4 from '../../asserts/images/c14.gif';


export const Hcard = () => {
    return (
        <>
        
       <div className="uk-container-expand hcard-main">
       <center><h3 className="wh"><b> What We Do </b></h3></center>
           <div className="uk-column-1-4@m hcard-full">
              
               <div className="hcard1">
               <Hcardbox image={c1} text="Education" />
               </div>
               <div className="hcard2">
               <Hcardbox image={c2} text="Health & Nutrition" />
               </div>
               <div className="hcard3">
               <Hcardbox image={c3} text="Safety & Protection" />
               </div>
               <div className="hcard4">
               <Hcardbox image={c4} text="Child Participation" />
              </div>
           </div>
       </div>


            
        </>
    )
}

export default Hcard;
