import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import logo from "./Images/TIX ID.png";
import playStore from "./Images/playStore.png";
import appStore from "./Images/appStore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="footer_section2">
        <div className="section_head">Company</div>
        <div className="section_text">Contact us</div>
        <div className="section_text">About</div>
        <div className="section_text">Partner</div>
      </div>

      <div className="footer_section3">
        <div className="section_head">About</div>
        <div className="section_text">TIX ID News</div>
        <div className="section_text">Cinema</div>
        <div className="section_text"> My Ticket</div>
        <div className="section_text">Payment</div>
        <div className="section_text">Installment</div>
      </div>

      <div className="footer_section4">
        <div className="section_head">Support</div>
        <div className="section_text">Help Center</div>
        <div className="section_text">Privacy Policy</div>
        <div className="section_text"> FAQ</div>
        <div className="section_text">Terms and Conditions</div>
        <div className="section_text">Update Covid-19</div>
      </div>

      <div className="footer_Section5">
        <div className="section_head">Follow Social Media</div>
        <div className="socialMedia_icons">
          <FaInstagram size={27} />
          <FaTwitter size={27} />
          <IoLogoFacebook size={27} />
        </div>
        <div className="section_head">Download the TIX ID Application</div>
        <div className="store_logo">
          <img src={playStore} alt="play-store"></img>
          <img src={appStore} alt="app-store"></img>
        </div>
        <div className="section5_text">
          2021 TIX ID - PT Nusantara Elang Sejahtera.
        </div>
      </div>
    </div>
  );
};

export default Footer;
