export interface Picture {
  id: number;
  image: string;
  imageUrl: string;
  name: string;
  badge1: string;
  badge2: string;
  badge3: string;
  description: string;
  tag: string;
  like: number;
  duration: string;
  director: string;
  avgRating: string;
  releaseDate: string;
  trailer: string;
  key: string;
}

const movies: Picture[] = [
  {
    id: 1,
    image: "https://www.movienewsletters.net/photos/316709R1.jpg",
    imageUrl:
      "https://sportshub.cbsistatic.com/i/2022/08/22/466e5e6b-1600-4b7a-a687-6b18e07bed1b/spider-man-no-way-home-rerelease.jpg?width=1200",
    name: "Spider-Man: No Way Home",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag: "Action",
    like: 1000,
    duration: "2 hours 28 Minutes",
    director: "Jon Watts",
    avgRating: "U",
    releaseDate: "08 Nov 2021 | TIX ID",
    trailer: "https://www.youtube.com/watch?v=Hi4ktzK9g0I",
    key: "Spiderman",
  },
  {
    id: 2,
    image:
      "https://images.justwatch.com/poster/256698343/s718/yowis-ben-finale.%7Bformat%7D",
    imageUrl: "https://i.ytimg.com/vi/PbkyO3s4rq8/maxresdefault.jpg",
    name: "Yowis Ben Finale",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag: "Spotlight",
    like: 1200,
    duration: "2 hours 28 Minutes",
    director: " Jon Watts",
    avgRating: "U/A",
    releaseDate: "08 Nov 2021 | TIX ID",
    trailer: "https://www.youtube.com/watch?v=PbkyO3s4rq8",
    key: "Yowis Ben",
  },
  {
    id: 3,
    image:
      "https://www.slashfilm.com/img/uploads/embed/embed-614b3e3b873b1.jpg",
    imageUrl:
      "https://www.hdwallpapers.in/download/ghostbusters_afterlife_the_buzz_hd_ghostbusters_afterlife-1920x1080.jpg",
    name: "Ghostbusters: Afterlife",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag: "News",
    like: 300,
    duration: "2 hours 28 Minutes",
    director: " Jon Watts",
    avgRating: " U",
    releaseDate: "08 Nov 2021 | TIX ID",
    trailer: "https://www.youtube.com/watch?v=Lrr4bvwldiM",
    key: "Ghostbusters",
  },
  {
    id: 4,
    image:
      "https://halifaxbloggers.ca/flawintheiris/wp-content/uploads/sites/7/2021/11/house-of-gucci-poster-691x1024.jpg",
    imageUrl:
      "https://wallpapers.com/images/hd/house-of-gucci-red-film-poster-eyqh8fgnrap4pkxc.jpg",
    name: "House of Gucci",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag: "News",
    duration: "2 hours 28 Minutes",
    director: " Jon Watts",
    avgRating: "A",
    like: 20,
    releaseDate: "08 Nov 2021 | TIX ID",
    trailer: "https://www.youtube.com/watch?v=pGi3Bgn7U5U",
    key: "House of Gucci",
  },
  {
    id: 5,
    image:
      "https://bestoftheyear.in/wp-content/uploads/2016/03/3-Idiots-poster.jpg",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.vy7d8DhLOWfHFbzd3UiHVQHaEK&pid=Api&P=0&h=180",
    name: "3 Idiots",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
    tag: "News",
    duration: "2 hours 14 Minutes",
    director: "Rajkumar Hirani",
    avgRating: "A",
    like: 10000,
    releaseDate: "08 Nov 2006 | TIX ID",
    trailer: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
    key: "3 idiots",
  },

  {
    id: 6,
    image:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Khichdi-2_1700139035.jpg",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.qk_Sbawm34Hh-DsYXxYMyAHaEK&pid=Api&P=0&h=180",
    name: "Khichdi 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    badge1: "XXI",
    badge2: "CGV",
    badge3: "Cinépolis",
    tag: "Spotlight",
    duration: "2 hours 10 Minutes",
    director: "Rajkumar Hirani",
    avgRating: "A",
    like: 100,
    releaseDate: "08 Nov 2006 | TIX ID",
    trailer: "https://www.youtube.com/watch?v=fHpapP-QiDI",
    key: "Khichdi 2",
  },
];

export default movies;
