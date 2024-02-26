import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Carousel.css";

interface CarouselProps {
  images: Image[];
}

export interface Image {
  image: string;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  const leftShiftHandler = () => {
    setIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const rightShiftHandler = () => {
    setIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel_buttons left">
        <button onClick={leftShiftHandler} className="slider">
          <FiChevronLeft size={28} />
        </button>
      </div>
      <div className="carousel_images">
        <img src={images[index].image} alt="image1" />
      </div>
      <div className="carousel_buttons right">
        <button onClick={rightShiftHandler} className="slider">
          <FiChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
