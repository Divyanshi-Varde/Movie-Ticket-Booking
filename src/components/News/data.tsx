export interface NewsItem {
  id: number;
  image: string;
  type: string;
  description: string;
  date: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    image:
      "https://s3-eu-west-1.amazonaws.com/cdn.metooo.it/flyer_image/bb218f98f6d706ec522d968573aa18f4bf0ff94b.jpeg",
    type: "Spotlight",
    description: "Spider-Man: No Way Home Releases Latest Trailer",
    date: "08 Nov 2021 | TIX ID",
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/PbkyO3s4rq8/maxresdefault.jpg",
    type: "Video",
    description:
      "Yowis Ben Finale Film Facts That You Need to Know Before Watching!",
    date: "09 Nov 2021 | TIX ID",
  },
  {
    id: 3,
    image:
      "https://www.giantfreakinrobot.com/wp-content/uploads/2021/11/ghostbusters-afterlife-poster-e1637594201531.jpg",
    type: "News",
    description: "Ghostbusters: Afterlife Comes Featuring New Ghost Variations",
    date: "15 Nov 2021 | TIX ID",
  },
];

export default news;
