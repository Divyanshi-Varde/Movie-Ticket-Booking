import React from "react";
import "./ComingSoon.css";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  image: string;
  description: string;
  badge1: string;
  badge2: string;
  badge3: string;
}

interface ComingSoonProps {
  movies: Movie[];
}

const ComingSoon: React.FC<ComingSoonProps> = ({ movies }) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/upcoming");
  }
  return (
    <div className="comingSoon">
      <div className="comingSoon_text">
        <div className="comingSoon_heading">
          <div className="heading">
            <h3>Upcoming Movies</h3>
          </div>
          <div className="paragraph">
            <pre>Wait for its arrival at your favorite cinema!</pre>
          </div>
        </div>
        <div className="see_all_button">
          <button onClick={clickHandler}>
            <pre>See All</pre>
          </button>
        </div>
      </div>

      <div className="comingSoon_movies">
        {movies.map((item: Movie) => (
          <div key={item.id}>
            {/* onClick={() => clickHandler(item.name)} */}
            <div className="comingSoon_image">
              <img src={item.image} alt={item.description} />
            </div>
            <div className="comingSoon_text">
              <p>{item.description}</p>
            </div>
            <div className="comingSoon_badges">
              <div className="badge one">{item.badge1}</div>
              <div className="badge two">{item.badge2}</div>
              <div className="badge three">{item.badge3}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
