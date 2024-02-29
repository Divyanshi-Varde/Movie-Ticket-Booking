import React from "react";
import "./News.css";
import { NewsItem } from "./data";
import { useNavigate } from "react-router-dom";

interface NewsProps {
  news: NewsItem[];
}

const News: React.FC<NewsProps> = ({ news }) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/news");
  }
  return (
    <div className="news_container">
      <div className="news_text">
        <div className="news_heading">
          <div className="heading">
            <h3>TIX ID News</h3>
          </div>
          <div className="paragraph">
            <pre>The latest news about the world of cinema for you!</pre>
          </div>
        </div>
        <div className="see_all_button">
          <button onClick={clickHandler}>
            <pre>See All</pre>
          </button>
        </div>
      </div>
      <div className="news_images">
        {news.map((item) => (
          <div key={item.id} className="news_articles">
            <div className="news_image">
              <img src={item.image} alt="image1"></img>
            </div>
            <div className="news_type">
              <button>{item.type}</button>
            </div>
            <div className="news_desc"><p>{item.description}</p></div>
            <div className="news_date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
