import React from 'react'

import './Cardbox1.css';

export const Cardbox1 = (props) => {
    return (
        
        
        <div className="award-card">
         <div className="award-card-sub1">
           <center><img src={props.image} alt="img1" className="card-image"></img></center>
          </div>
         <div className="award-card-sub2">
             <p style={{textAlign:"center"}} className="acard-detail">{props.detail}</p>
             <p style={{textAlign:"center" , color:"yellow"}}>{props.name}</p>
         </div>
          </div>
        
        
                
                
            
        
    )
}

export default Cardbox1;