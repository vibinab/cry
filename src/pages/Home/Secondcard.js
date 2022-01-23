import React from 'react';

import './Secondcard.css';
import  Secondcardbox  from './Secondcardbox';

import icon4 from '../../asserts/images/icon4.png';
import icon5 from '../../asserts/images/icon5.png';


export const Secondcard = () => {
    return (
        <>
            <div className="uk-container">
            <div className="secondcardmain">
            <div className="uk-column-1-2@m">
                <div className="secondcardsub1">
                
                <Secondcardbox simg={icon4} scontent="2,176" stext="children in CRY project areas, under the age of 5 years, free from malnutrition" />
                </div>
                <div className="secondcardsub2">
                <Secondcardbox simg={icon5} scontent="7,582" stext="children in CRY project areas rescued from child labour, child marriage & child trafficking" /> 
                </div>
            </div>
            </div>
            </div>

        </>
    )
}

export default Secondcard ;