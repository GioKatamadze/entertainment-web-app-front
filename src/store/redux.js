import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movie-slice.js";
import { userReducer } from "./slices/user-slice.js";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    users: userReducer,
  },
});

export default store;
