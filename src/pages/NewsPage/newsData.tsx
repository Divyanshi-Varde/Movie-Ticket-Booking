export interface NewsItem {
  id: number;
  image: string;
  type: string;
  title:string;
  date: string;
  description:string;
}

const news: NewsItem[] = [
  {
    id: 1,
    image:
      "https://i1.wp.com/boxofficeworldwide.com/wp-content/uploads/2019/10/PriyankaChopra-TheSkyIsPink.jpeg?resize=1024%2C517&ssl=1",
    type: "Spotlight",
    title: "'The Sky Is Pink' Review: A Story Told From the Grave",
    date: "08 Mar 2018 | TIX ID",
    description:
      "In the colorful melodrama “The Sky Is Pink,” a teenager tells the story of her family's care and sacrifices from an unusual vantage point...",
  },
  {
    id: 2,
    image:
      "http://www.scifimoviepage.com/wp-content/uploads/2020/05/furious.jpg",
    type: "News",
    title: "Wait, Who's Fast, Who's Furious?",
    date: "03 Nov 2023 | TIX ID",
    description:
      "At one point, rather a long time ago now, the “Fast & Furious” movies were about street racing. They do still involve cars moving at breakneck...",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/attackongeek.com/wp-content/uploads/2019/12/Jumanji-The-Next-Level.jpeg?fit=1024%2C683&ssl=1",
    type: "Video",
    title: "Jumanji: The Next Level review : an upbeat, frenetic adventure",
    date: "15 May 2020 | TIX ID",
    description:
      "When Eddie's disillusioned grandson Spencer (Alex Wolff) ventures back into the Jumanji video game with dreams of once again becoming handsome adventurer Dr Smolder Bravestone...",
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home Releases Latest Trailer",
    date: "17 Nov 2021 | TIX ID",
    type: "Spotlight",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.maL6iEqLewOwJ1qXCfmzwgHaEK&pid=Api&P=0&h=180",
    description:
      "Spider-Man: No Way Home is a film that is highly anticipated by many people. This film is a continuation of the story of Peter Parker in...",
  },
  {
    id: 5,
    title:
      "Facts about the film Yowis Ben Finale that you need to know before watching!",
    type: "News",
    date: "06 Nov 2021 | TIX ID",
    image: "https://i.ytimg.com/vi/PbkyO3s4rq8/maxresdefault.jpg",
    description:
      "The Yowis Ben Finale film is the final film in the Yowis Ben film tetralogy. The film directed by Bayu Eko Moektito or commonly...",
  },
  {
    id: 6,
    title: "Facts about the film House of Gucci that you need to know!",
    date: "21 Nov 21 | TIX ID",
    type: "Video",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.HJGOV9yFjGDkqrd1Ik3bgQHaD4&pid=Api&P=0&h=180",
    description:
      "House of Gucci is a 2021 American biographical crime drama film directed by Ridley Scott, based on the 2001 book The House of Gucci: A...",
  },
];

export default news;
