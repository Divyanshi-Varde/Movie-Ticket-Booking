import React from "react";
import "./HeroSection.css";
import { useState } from "react";
import  { Picture } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSection: React.FC<{ pictures: Picture[] }> = ({ pictures }) => {
  const [index, setIndex] = useState<number>(0);
  const startIndex: number = 2;

  const clickHandler = (title: string) => {
    // Handle click event
  };

  const leftShiftHandler = () => {
    if (index === 0) {
      setIndex(pictures.length - 2);
    } else if (index === 1) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 2);
    }
  };

  const rightShiftHandler = () => {
    if (index + 2 >= pictures.length) {
      setIndex(0);
    } else {
      setIndex(index + 2);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-section-buttons">
        <button onClick={leftShiftHandler} className="slider">
          <FiChevronLeft size={28} />
        </button>
      </div>
      <div className="hero-section-pictures">
        {pictures.slice(index, index + startIndex).map((picture: Picture) => (
          <div
            key={picture.id}
            onClick={() => clickHandler(picture.description)}
          >
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
        ))}
      </div>

      <div className="hero-section-buttons">
        <button onClick={rightShiftHandler} className="slider">
          <FiChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
