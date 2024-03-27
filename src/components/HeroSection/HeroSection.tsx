import React, { useState } from "react";
import { Picture } from "./data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovieData } from "../../redux/Slices/movieBookingSlice";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RootState } from "../../redux/Stores/store";
import "./HeroSection.css";

const HeroSection: React.FC<{ pictures: Picture[] }> = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const startIndex: number = 2;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { moviesData } = useSelector((state: RootState) => state.movies);

  const clickHandler = (picture: Picture) => {
    dispatch(setMovieData(picture));
    navigate(`/choosing-schedule/?id=${(picture.id)}`);
  };

  const leftShiftHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 2 : prevIndex - 2
    );
  };

  const rightShiftHandler = () => {
    setIndex((prevIndex) =>
      prevIndex + 2 >= pictures.length ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="hero-section">
      <div className="hero-section-buttons">
        <button onClick={leftShiftHandler} className="slider">
          <FiChevronLeft size={28} />
        </button>
      </div>
      <div className="hero-section-pictures">
        {moviesData
          ?.slice(index, index + startIndex)
          .map((picture: Picture) => (
            <div key={picture.id} onClick={() => clickHandler(picture)}>
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
// import { Picture } from "./data";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setMovieData } from "../../redux/Slices/movieBookingSlice";
// import { InitialStateMovieData } from "../../redux/Slices/movieShowSlice";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import "./HeroSection.css";
// // import { RootState } from "../../redux/Stores/store";

// const HeroSection: React.FC<{ pictures: Picture[] }> = ({ pictures }) => {
//   const [index, setIndex] = useState(0);
//   const startIndex: number = 2;
//   const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const { moviesData } = useSelector(
//       (state: any) => state.movies
//     );
//     const clickHandler = (picture: Picture) => {
//       dispatch(setMovieData(picture));
//       navigate(`/choosing-schedule/?id=${encodeURIComponent(picture.id)}`);
//     };

//   const leftShiftHandler = () => {
//     if (index === 0) {
//       setIndex(pictures.length - 2);
//     } else if (index === 1) {
//       setIndex(pictures.length - 1);
//     } else {
//       setIndex(index - 2);
//     }
//   };

//   const rightShiftHandler = () => {
//     if (index + 2 >= pictures.length) {
//       setIndex(0);
//     } else {
//       setIndex(index + 2);
//     }
//   };

//   return (
//     <div className="hero-section">
//       <div className="hero-section-buttons">
//         <button onClick={leftShiftHandler} className="slider">
//           <FiChevronLeft size={28} />
//         </button>
//       </div>
//       <div className="hero-section-pictures">
//         {moviesData.slice(index, index + startIndex).map((picture: Picture) => (
//           <div key={picture.id} onClick={() => clickHandler(picture)}>
//             <div className="hero-section-image">
//               <img src={picture.image} alt={picture.name} />
//             </div>
//             <div className="hero-section-text">
//               <p>{picture.name}</p>
//             </div>
//             <div className="hero-section-badges">
//               <div className="badge one">{picture.badge1}</div>
//               <div className="badge two">{picture.badge2}</div>
//               <div className="badge three">{picture.badge3}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="hero-section-buttons">
//         <button onClick={rightShiftHandler} className="slider">
//           <FiChevronRight size={28} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
