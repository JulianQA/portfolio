import youtubeImg from "../../src/assets/imgs/youtube-clon.png";
import nextFootballImg from "../../src/assets/imgs/next-football.png";
import moviesImg from "../../src/assets/imgs/JMovies.png";

export const projectsData = [
  {
    id: 1,
    name: "Youtube clon",
    languages: ["react", "css", "redux"],
    description:
      "It's a fully functional youtube clone. You can watch videos, search any video, see comments, related videos and trending videos. Use firebase to login. Consumes YoutubeAPI/v3  API.",
    source: "https://github.com/JulianQA/youtube-clon",
    image: youtubeImg,
    deploy: "https://julianqa.github.io/youtube-clon/",
  },
  {
    id: 2,
    name: "JMovies",
    languages: ["react", "sass", "redux"],
    description:
      "It's a web app that shows the trending movies, the current movies, the movies by category, search for any movie and see the details of each movie. Consumes themoviedb/v3 API.",
    source: "https://github.com/JulianQA/movies-react",
    image: moviesImg,
    deploy: "https://julianqa.github.io/movies-react/",
  },
  {
    id: 3,
    name: "NextFootball",
    languages: ["react", "next", "tailwind", "typescript"],
    description:
      "It is a web app that shows the results of live soccer matches, the details of each match such as the lineup, events and statistics. Consumes API-FOOTBALL API",
    source: "https://github.com/JulianQA/next-football",
    image: nextFootballImg,
    deploy: "https://next-football-kappa.vercel.app/",
  },
];
