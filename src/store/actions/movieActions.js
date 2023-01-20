import getMovies from "services/moviesServices.js";
import { movieActions } from "store/slices/movie-slice.js";

export const fetchMovie = () => {
  return async (dispatch) => {
    const fetchMoviesInfo = async () => {
      const response = await getMovies();
      return response.data;
    };

    try {
      const movies = await fetchMoviesInfo();
      dispatch(movieActions.fetchMovie(movies));
    } catch (error) {}
  };
};
