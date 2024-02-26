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
      "https://i1.wp.com/boxofficeworldwide.com/wp-content/uploads/2019/10/PriyankaChopra-TheSkyIsPink.jpeg?resize=1024%2C517&ssl=1",
    type: "News",
    description: "'The Sky Is Pink' Review: A Story Told From the Grave",
    date: "08 Mar 2018 | TIX ID",
  },
  {
    id: 2,
    image:
      "http://www.scifimoviepage.com/wp-content/uploads/2020/05/furious.jpg",
    type: "News",
    description: "Wait, Who's Fast, Who's Furious?",
    date: "03 Nov 2023 | TIX ID",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/attackongeek.com/wp-content/uploads/2019/12/Jumanji-The-Next-Level.jpeg?fit=1024%2C683&ssl=1",
    type: "News",
    description:
      "Jumanji: The Next Level review : an upbeat, frenetic adventure",
    date: "15 May 2020 | TIX ID",
  },
];

export default news;
