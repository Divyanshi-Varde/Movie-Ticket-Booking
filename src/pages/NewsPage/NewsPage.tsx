import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
// import articles, { Article } from "./spotlightData";
import news, { NewsItem } from "./newsData";
import { CiSearch } from "react-icons/ci";
import "./NewsPage.css";
import { useNavigate } from "react-router-dom";

interface NewsPageProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewsPage: React.FC<NewsPageProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </div>

      <div className="newsPage">
        <div className="newsPage_heading">
          <h1>TIX ID News</h1>
        </div>

        <div className="newsPage_subheading">
          <h3>The latest news about the world of film for you!</h3>
        </div>

        <div className="newsPage_form">
          <div className="search">
            <form>
              <input
                type="text"
                name="search"
                placeholder="Search Post"
                className="input_field"
              />
              <div className="search_icon">
                <CiSearch size={25} />
              </div>
            </form>
          </div>

          <div className="dropDown">
            <form>
              <select className="dropDown_select">
                <option value="Select" className="dropDown_options">
                  Select
                </option>
                <option value="Spotlight" className="dropDown_options">
                  Spotlight
                </option>
                <option value="News" className="dropDown_options">
                  News
                </option>
                <option value="Video" className="dropDown_options">
                  Video
                </option>
              </select>
            </form>
          </div>
        </div>

        <div className="newsPage_filters">
          <div className="filter_types"> Spider Man</div>
          <div className="filter_types"> Peter Parker</div>
          <div className="filter_types"> Yowis Ben</div>
          <div className="filter_types"> Ghostbusters</div>
          <div className="filter_types"> Indonesian films</div>
          <div className="filter_types">Action</div>
        </div>

        <div>
          {news.map((item: NewsItem, index: number) => (
            <div
              key={item.id}
              className={
                index % 2 === 0 ? "news_container_odd" : "news_container_even"
              }
            >
              <div className="container_text">
                <div className="container_button">
                  <button
                    onClick={() => navigate(`/${item.type.toLowerCase()}`)}
                  >
                    {item.type}
                  </button>
                </div>

                <div className="container_title">{item.title}</div>

                <div className="container_description">{item.description}</div>

                <div className="container_date">{item.date}</div>
              </div>

              <div className="container_image1">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="news_images1">
        {news.map((item: NewsItem) => (
          <div key={item.id} className="news_articles">
            <div className="news_image1">
              <img src={item.image} alt="News" />
            </div>
            <div className="news_type">
              <button>{item.type}</button>
            </div>
            <div className="news_desc">{item.description}</div>
            <div className="news_date">{item.date}</div>
          </div>
        ))}
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
