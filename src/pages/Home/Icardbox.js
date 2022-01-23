import React from 'react'
import './Icardbox.css';

export const Icardbox = (props) => {
    return (
        <>
            
            <div className="main-card">
            <div className="c1">
             <span className="font-icon"><img src={props.image} className="img11"></img></span>
             </div>
             <div className="c2">
             <h3>{props.heads}</h3>
             <p>{props.text}</p>
             </div>
            </div>
        </>
    )
}

export default Icardbox;