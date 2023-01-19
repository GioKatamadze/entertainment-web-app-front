import instance from "./axios.js";

const getMovies = () => {
  return instance.get("/movies");
};

export default getMovies;
