import React from 'react';
import './Hcardbox.css';

export const Hcardbox = (props) => {
    return (
        <>
        <div className="hcardbox">
            <img src={props.image}  width="284" height="213"></img>
            <center><p>{props.text}</p></center>
            <center><hr className="cardline"></hr></center>

        </div>
            
        </>
    )
}

export default Hcardbox;