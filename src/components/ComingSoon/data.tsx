export interface Movie {
  id: number;
  image: string;
  description: string;
  badge1: string;
  badge2: string;
  badge3: string;
}

const movies: Movie[] = [
  {
    id: 1,
    image: "http://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    description: "The Matrix: Resurrections",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
  },
  {
    id: 2,
    image:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/10/resident_evil_welcome_to_raccoon_city_ver4_xxlg.jpg",
    description: "Resident Evil: Welcome to Raccoon City",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
  },
  {
    id: 3,
    image:
      "https://www.cinemaclock.com/images/posters/1000x1500/43/sword-art-online-the-movie-progressive-aria-of-a-starless-night-2021-us-poster.jpg",
    description: "Sword Art Online: Progressive - Aria of a Starless Night",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
  },
];

export default movies;
