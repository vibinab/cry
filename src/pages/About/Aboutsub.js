import React from "react";
import img3 from '../../asserts/images/video-patch.png';
import './Aboutsub.css';
import img4 from '../../asserts/images/about-team-banner.jpg';



export const Aboutsub = () => {
    return (
        <>
        <div className="uk-container">
        <div class="uk-column-1-2@m">
            <div className="section11">
                <p  className="decades"><b>Over 4 decades of ensuring</b>
                <span className="happy">happier childhoods</span></p>
                <p className="decades-1"> CRY was born of a dreamto ensure happier childhoods for all children </p>
                
                <p className="decades-2">
                In 1979, Rippan Kapur – an Indian Airlines purser – started CRY with 6 friends and just Rs. 50. Today, over 4 decades later, CRY works with 102 local NGOs across 19 states in India and has impacted the lives of over 3 million children.
                </p>
                <div className="button ">
                    <button type="submit" className=" uk-button cbutton">Watch the video</button>
                </div>
            </div>
            <div className="section2">
            <img src={ img3} className="decade-image"></img>
           
            </div>


        </div>

            
        </div>
        <div className="uk-container-expand">
            <img src={img4} ></img>
        </div>
        </>
    )
}

export default Aboutsub;