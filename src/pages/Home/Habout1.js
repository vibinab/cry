import React from 'react';

import './Habout1.css';
import imgs from '../../asserts/images/child-approach.png';
import imgs1 from '../../asserts/images/approach-community.jpg';
import imgs2 from '../../asserts/images/approach-family1.jpg';
import imgs3 from '../../asserts/images/approach-govt.jpg';
import imgs4 from '../../asserts/images/approach-public.jpg';


export const Habout1 = () => {
    return (
    
        <div className="uk-container">
        <div className= "uk-column-1-2@m sect-main">
            <div className="sect1">
                <h3 style={{width:"70%"}}><b>Our approach is modeled around bringing change<span className="level"> at all levels</span></b></h3>
                <p style={{width:"85%"}}>With your support, we address children’s critical needs by working with parents, teachers, Anganwadi workers, communities, district and state level governments as well as the children themselves.</p>
               <p style={{width:"85%"}}>We focus on changing behaviours and practices at the grassroots level and influencing public policy at a systemic level – thereby creating an ecosystem where children are made the nation’s priority.</p>
            </div>
            <div className="sect2">
                <span><img src={imgs2} className="s1"></img></span>
                <span><img src={imgs1} className="s2"></img></span>
                <center> <img src={imgs} height={100} width={110} className="circle-image"></img></center>
                <span><img src={imgs3} className="s1"></img></span>
                <span><img src={imgs4} className="s2"></img></span>
            </div>
        </div>

        </div>
            
        
    )
}

export default Habout1;