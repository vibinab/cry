
import img3 from '../../asserts/images/video-patch.png';
import React from 'react';
import './home.css';
import img4 from '../../asserts/images/children-wide-banner.jpg';
import hicon from '../../asserts/images/homefirsticon.gif';

export const home = () => {
    return (
        <>
        <div class="uk-container-expand">
        <div className="uk-column-1-2@m">
            <div className="home-section1 ">
                <div className="sub-section">
                 <p style={{width:"70%"}}>Let's ensure <span className="happy">happy<img src={hicon} className="home-icon"></img></span>
                <span className="child">Childhoods </span>for <br/>
                indian's children<br></br></p>

                <button type="submit" className="hbutton"><span  className="heart-icon"><i class="fa fa-heart"></i></span> Yes! I Want To Help</button>

                </div>
               
            </div>
           <div>
           <img src={ img3} height={600} width={500} className="firstimage" ></img>
           

           </div>
           
        </div>
        </div>
        <div className="uk-container--xlarge">
        <img src={ img4} height={100}  className="secondimage" ></img>
        </div>
    </>
    )
}

export default home;