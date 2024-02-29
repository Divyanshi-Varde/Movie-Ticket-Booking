import React from "react";
import Slider from "react-slick";
import { Picture } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HeroSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Demo: React.FC<{ pictures: Picture[] }> = ({ pictures }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <Slider {...settings}>
      <div className="slider-container">
        
        <div className="hero-section-pictures">
          {pictures.map((picture: Picture) => {
          return( <div key={picture.id}>
              <div className="hero-section-image">
                <img src={picture.image} alt={picture.description} />
              </div>
              <div className="hero-section-text">
                <p>{picture.description}</p>
              </div>
              <div className="hero-section-badges">
                <div className="badge one">{picture.badge1}</div>
                <div className="badge two">{picture.badge2}</div>
                <div className="badge three">{picture.badge3}</div>
              </div>
            </div>
          );
})}
        </div>


      </div>
    </Slider>
  );
}

export default Demo;
