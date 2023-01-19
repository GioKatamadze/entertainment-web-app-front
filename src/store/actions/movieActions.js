import getMovies from "services/moviesServices.js";
import { movieActions } from "store/slices/movie-slice.js";

export const getMovies = () => {
  return async (dispatch) => {
    const fetchMoviesInfo = async () => {
      const response = await getMovies();
      return response.data;
    };

    try {
      const mes = await fetchMoviesInfo();
      dispatch(movieActions.getMovies(movies));
    } catch (error) {}
  };
};
