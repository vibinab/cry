import React from 'react';
import './Secondcardbox.css'

export const Secondcardbox = (props) => {
    return (
        <>
        <div className="sdcard-main">
            <div className="sdcard-sub1">
                <span className="secondcard-icon"><img src={props.simg} className="secondcard-image"></img></span>

            </div>
            <div className="sdcard-sub2">
                <h3>{props.scontent}</h3>
                <p>{props.stext}</p>
            </div>
        </div>
            
        </>
    )
}

export default Secondcardbox ;