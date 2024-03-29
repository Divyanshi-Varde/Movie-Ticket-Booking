import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import News from "../../components/News/News";
import Carousel from "../../components/Carousel/Carousel";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Footer from "../../components/Footer/footer";
import pictures, { Picture } from "../../components/HeroSection/data";
import images, { Image } from "../../components/Carousel/data";
import news from "../../components/News/data";
import movies, { Movie } from "../../components/ComingSoon/data";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar  />
      <HeroSection pictures={pictures as Picture[]} />
      <Carousel images={images as Image[]} />
      <News news={news} />
      <ComingSoon movies={movies as Movie[]} />
      <Footer />
    </div>
  );
};

export default Home;
