import youtubeImg from "../src/assets/imgs/youtube-clon.png";
import toDoImg from "../src/assets/imgs/ToDo.png";
import moviesImg from "../src/assets/imgs/JMovies.png";

export const projectsData = [
  {
    id: 1,
    name: "Youtube clon",
    languages: ["react", "css", "redux"],
    description:
      "It's a fully functional youtube clone. You can watch videos, search any video, see comments, related videos and trending videos. Use firebase to login. Consumes YoutubeAPI/v3  API.",
    source: "https://github.com/JulianQA/youtube-clon",
    image: youtubeImg,
  },
  {
    id: 2,
    name: "JMovies",
    languages: ["react", "sass", "redux"],
    description:
      "It's a web app that shows the trending movies, the current movies, the movies by category, search for any movie and see the details of each movie. Consumes themoviedb/v3 API.",
    source: "https://github.com/JulianQA/movies-react",
    image: moviesImg,
  },
  {
    id: 3,
    name: "ToDo App",
    languages: ["react", "css"],
    description:
      "It's a web app that allows you to create TODOs, edit them, delete them and mark them as done.",
    source: "https://github.com/JulianQA/todo-app",
    image: toDoImg,
  },
];
