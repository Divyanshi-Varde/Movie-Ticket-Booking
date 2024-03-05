import React from "react";
import { Picture } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HeroSection.css";
import { useState } from "react";

const HeroSection: React.FC<{ pictures: Picture[] }> = ({ pictures }) => {
const [index, setIndex] = useState(0);
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
      onClick={() => clickHandler(picture.name)}>
      <div className="hero-section-image">
        <img src={picture.image} alt={picture.name} />
      </div>
      <div className="hero-section-text">
        <p>{picture.name}</p>
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



// import React from "react";
// import Slider from "react-slick";
// import { Picture } from "./data";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import "./HeroSection.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSection: React.FC<{ pictures: Picture[] }> = ({ pictures }) => {
//   const CustomPrevArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button onClick={onClick} className="slider">
//         <FiChevronLeft size={28} />
//       </button>
//     );
//   };

//   const CustomNextArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button onClick={onClick} className="slider">
//         <FiChevronRight size={28} />
//       </button>
//     );
//   };
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <div className="hero-section">
//       <Slider {...settings}>
//         <div className="hero-section-pictures">
//           {pictures.map((picture: Picture) => (
//             <div key={picture.id}>
//               <div className="hero-section-image">
//                 <img src={picture.image} alt={picture.description} />
//               </div>
//               <div className="hero-section-text">
//                 <p>{picture.description}</p>
//               </div>
//               <div className="hero-section-badges">
//                 <div className="badge one">{picture.badge1}</div>
//                 <div className="badge two">{picture.badge2}</div>
//                 <div className="badge three">{picture.badge3}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default HeroSection;
