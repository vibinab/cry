import React from "react";

import './Cardbox.css';



export const Cardbox = (props) => {
    return (
        <>
       <div className="card-body">
           <div className="card-body-content">
           <img src={ props.image } ></img>
           <div className=""card-content>
            <p>{props.name}</p>
            <center> <hr className="card-line" /></center>
        </div>
        {/* <div className="card-body-content1">
        <p>{props.name}</p>
            <center> <hr className="card-line" /></center>
        <p>To enable people to take responsibility for the situation of the deprived Indian child and so motivate them to seek resolution through individual and collective action thereby enabling children to realise their full potential</p>


        </div>  */}
       </div>
      
        </div>   
        
        </>

    )
}

export default Cardbox;
