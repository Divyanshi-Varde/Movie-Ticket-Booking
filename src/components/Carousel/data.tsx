import img1 from "./Carousel_images/Content.png";
import img2 from "./Carousel_images/Content2.png";
import img3 from "./Carousel_images/Content3.png";

export interface Image {
  image: string;
}

const images: Image[] = [{ image: img1 }, { image: img2 }, { image: img3 }];

export default images;
