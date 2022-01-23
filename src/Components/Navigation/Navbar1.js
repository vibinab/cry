import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import {FaLinkedinIn} from "@react-icons/all-files/fa/FaLinkedinIn";
import img22 from "../images/navbar-icon.png";

import './Navbar1.css';

export const Navbar1 = () => {


     const [click, setClick] = useState(false);

     const handlerClick=() =>setClick(!click);
    return (
        <>
        <nav>
        <div className="navbar">
            <div className="menu">
                <li className="menu-links"><NavLink activeClassName="active"  to="/home" onClick={handlerClick} className="home-nav1">Home</NavLink></li>
                <li className="menu-links">Why children</li>
                <li className="menu-links"><NavLink to="/about" activeClassName="active"  onClick={handlerClick} className="about-nav1" >About Cry</NavLink></li>
                <li className="menu-links">Our approach</li>
                <li className="menu-links">Our  impact</li>
                <li className="menu-links">Corporate Partnership</li>
                <li className="menu-links">Volunteering & internship</li>

            </div>
            <div className="nav-close" onClick={handlerClick}>
            <i className={click ? "fa fa-close":"fa fa-bars"}></i>
            </div>
            <div className="logo11">
               <img src={img22} alt="logo" className="limage11"></img>

           </div>
            
            <div className="button">
                <button type="text" className="ddbutton"><span className="dn"><i className="fa fa-heart"></i></span >Donate now</button>
            </div>
            <div className={click ? "menu1 active":"menu1"}>
            <li className="menu1-links"><NavLink activeClassName="active" className="home-nav" to="/home" onClick={handlerClick}>Home</NavLink></li>
                <li className="menu1-links">Why children</li>
                <li className="menu1-links"><NavLink to="/about" activeClassName="active"  className="about-nav"  onClick={handlerClick} >About Cry</NavLink></li>
                <li className="menu1-links">Our approach</li>
                <li className="menu1-links">Our  impact</li>
                <li className="menu1-links">Corporate Partnership</li>
                <li className="menu1-links">Volunteering & internship</li>

            <div className="second-section">
                <div className="second-section-search">
                <i class="fa fa-search ss"></i>
                    <input type="text"  placeholder="search" className="second-section-search-button"></input>
                </div>

                <div className="second-section-icons">
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
           
        </div>
        </nav>
        </>
    )
}

export default Navbar1;