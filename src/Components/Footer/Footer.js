import React from 'react';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import {FaLinkedinIn} from "@react-icons/all-files/fa/FaLinkedinIn";
import {FaRegCopyright} from "@react-icons/all-files/fa/FaRegCopyright";
import './Footer.css';



export const Footer = () => {
    return (
        <>
        <div class="uk-container-expand .uk-container-xsmall footer-main1">
        <div className="footer-main">
        <ul className="fm">
            <li><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedinIn /></li>
           
        </ul>
    
       
        <ul className=" fm1 ">
            <li className="uk-column-span">Blog</li>
            <li>CRY Child Protection Policy</li>
            <li>Get Involved</li>
            <li>Contact Us</li>

        </ul>
        <center><hr className=" hrr">
        
        </hr></center>
        <ul className="fm2">
            <li><span><FaRegCopyright /></span> 2021 CRY - Child Rights and You. All rights reserved. </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
        </div>
        </div>
        <div className="footer-small">
            <div className="footer-small-sub">
            <ul className="fm11">
            <li className="facebook"><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedinIn /></li>
           
        </ul>

        <ul className=" fm22 ">
            <li className="blog">Blog</li>
            <li  className="policy">CRY Child Protection Policy</li>
            <div class="fm22-sub">
            <li className="involve">Get Involved</li>
            <li className="contact">Contact Us</li>
            </div>

        </ul>
        
        <ul className="fm33">
            <li className="right"><span><FaRegCopyright /></span> 2021 CRY - Child Rights and You. All rights reserved. </li>
            <div className="fm33-sub">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            </div>
        </ul>

            </div>

        </div>
        </>
    )
}

export default Footer;