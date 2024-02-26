import React from "react";
import logo from "./Carousel1_images/tix id 1.png";
import image1 from "./Carousel1_images/person1.png";
import image2 from "./Carousel1_images/person2.png";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./CarouselOne.css";

const CarouselOne = () => {
  return (
    <div className="carouselOne_container">
      <div className="carouselOne_left">
        <div className="carouselOne_logo">
          <img src={logo} alt="tix_id"></img>
        </div>
        <div className="carouselOne_text">
          RENT/BUY MOVIES and SERIES on TIX ID now!
        </div>
        <div className="carouselOne_icons">
          <div className="carouselOne_icon1">
            <TbWorld size={22} />
            <p>www.tix.id</p>
          </div>
          <div className="carouselOne_icon2">
            <FaInstagram size={20} />
            <p>tix_id</p>
          </div>
        </div>
      </div>
      <div className="carouselOne_right">
        <div className="carouselOne_image1">
          <img src={image1} alt="image1"></img>
        </div>
        <div className="carouselOne_image2">
          <img src={image2} alt="image2"></img>
        </div>
      </div>
    </div>
  );
};

export default CarouselOne;
