import React from "react";
import img1 from '../images/navbar-icon.png';
import { Link } from "react-router-dom";
import './Navbar.css';

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import {FaLinkedinIn} from "@react-icons/all-files/fa/FaLinkedinIn";
export default function Navbar() {
    return (
        <>
        <nav className="first-nav">
       <div className="nav-bar">
           <div className="logo">
               <img src={img1} alt="logo" className="limage"></img>

           </div>
           <div className="social">
               <div className="search">
               <i class="fa fa-search main-s"></i>
                   <input type="text" className="searchbar" placeholder="Search"></input>
                </div>
                <div class="links">
                    <li>
                    <FaFacebookF />
                    </li>
                    <li>
                    <FaTwitter />
                    </li>
                    <li>
                    <FaInstagram />
                    </li>
                    <li>
                    <FaLinkedinIn />
                    </li>
                </div>

           </div>

       </div>
       </nav>
        </>
    )
}
