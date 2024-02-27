export interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}


const articles: Article[] = [
  {
    id: 1,
    title: "Spider-Man: No Way Home Releases Latest Trailer",
    date: "17 Nov 2021 | TIX ID",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.maL6iEqLewOwJ1qXCfmzwgHaEK&pid=Api&P=0&h=180",
    description:
      "Spider-Man: No Way Home is a film that is highly anticipated by many people. This film is a continuation of the story of Peter Parker in...",
  },
  {
    id: 2,
    title:
      "Facts about the film Yowis Ben Finale that you need to know before watching!",
    date: "06 Nov 2021 | TIX ID",
    image: "https://i.ytimg.com/vi/PbkyO3s4rq8/maxresdefault.jpg",
    description:
      "The Yowis Ben Finale film is the final film in the Yowis Ben film tetralogy. The film directed by Bayu Eko Moektito or commonly...",
  },
  {
    id: 3,
    title: "Facts about the film House of Gucci that you need to know!",
    date: "21 Nov 21 | TIX ID",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.HJGOV9yFjGDkqrd1Ik3bgQHaD4&pid=Api&P=0&h=180",
    description:
      "House of Gucci is a 2021 American biographical crime drama film directed by Ridley Scott, based on the 2001 book The House of Gucci: A...",
  },
  {
    id: 4,
    title:
      "Facts about the film 3 Idiots that you need to know before watching!",
    date: "19 Apr 05 | TIX ID ",
    image:
      "https://i.zoomtventertainment.com/story/Untitled_design_-_2020-05-01T135137.466.jpg",
    description:
      "One night in their fourth year of college, Rancho tells his friends why they consistently place last: Farhan's passion is photography, not engineering, and Raju lacks self-confidence. After Farhan and Raju...",
  },
];

export default articles;
