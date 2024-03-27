import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import "./ComingSoonPage.css";
import movies,{Movie} from "../../components/ComingSoon/data";

const ComingSoonPage:React.FC = () => {

useEffect(() => {
  window.scrollTo(0,0);
})

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="upcomingMovies">
          <div className="upcomingMovies_text">
            <div className="upcomingMovies_heading">
              <div className="heading">
                <h3>Upcoming Movies</h3>
              </div>
              <div className="paragraph">
                <pre>Wait for its arrival at your favorite cinema!</pre>
              </div>
            </div>
          </div>

          <div className="upcomingMovies_movies">
            {movies.map((item:Movie) => (
              <div key={item.id}>
                <div className="upcomingMovies_image">
                  <img src={item.image} alt={item.description} />
                </div>
                <div className="upcomingMovies_text1">
                  <p>{item.description}</p>
                </div>
                <div className="upcomingMovies_badges">
                  <div className="badge one">{item.badge1}</div>
                  <div className="badge two">{item.badge2}</div>
                  <div className="badge three">{item.badge3}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoonPage;
