
import React from "react";
import {FaInstagramSquare} from "react-icons/fa";
import {BiLogoFacebookSquare} from "react-icons/bi";
import {FaTwitterSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaSquareThreads} from "react-icons/fa6";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagramSquare/><BiLogoFacebookSquare/><FaTwitterSquare/><FaLinkedin/><FaSquareThreads/>
      </div>
      <p> &copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;
