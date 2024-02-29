export interface NewsItem {
  id: number;
  image: string;
  type: string;
  // title:string;
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
  {
    id: 4,
    image:
      "http://www.scifimoviepage.com/wp-content/uploads/2020/05/furious.jpg",
    type: "News",
    description: "Wait, Who's Fast, Who's Furious?",
    date: "03 Nov 2023 | TIX ID",
    //description:"At one point, rather a long time ago now, the “Fast & Furious” movies were about street racing. They do still involve cars moving at breakneck...",
  },
  {
    id: 5,
    image:
      "https://i0.wp.com/attackongeek.com/wp-content/uploads/2019/12/Jumanji-The-Next-Level.jpeg?fit=1024%2C683&ssl=1",
    type: "Video",
    description:
      "Jumanji: The Next Level review : an upbeat, frenetic adventure",
    date: "15 May 2020 | TIX ID",
    //description:"When Eddie's disillusioned grandson Spencer (Alex Wolff) ventures back into the Jumanji video game with dreams of once again becoming handsome adventurer Dr Smolder Bravestone...",
  },
  {
    id: 6,
    image:
      "https://i1.wp.com/boxofficeworldwide.com/wp-content/uploads/2019/10/PriyankaChopra-TheSkyIsPink.jpeg?resize=1024%2C517&ssl=1",
    type: "Spotlight",
    description: "'The Sky Is Pink' Review: A Story Told From the Grave",
    date: "08 Mar 2018 | TIX ID",
    //description:"In the colorful melodrama “The Sky Is Pink,” a teenager tells the story of her family's care and sacrifices from an unusual vantage point...",
  },
];

export default news;
