import React from 'react';
import './Cardbox2.css';


export const Cardbox2 = (props) => {
    return (
        <div className="media-card">
        <div class="media-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <center><img src={props.image} width="200"></img></center>
                </div>
                
            </div>
        </div>
        <div class="media-card-body">
            <center><p style={{color:"yellow"}}>{props.date}</p></center>
            <center><p>{props.para}</p></center>
        </div>
        <div class="media-card-footer">
            <center><a href="#" class="uk-button uk-button-text">Read more</a></center>
        </div>
    </div>
    )
}

export default Cardbox2;