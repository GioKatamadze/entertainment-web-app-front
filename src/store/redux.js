import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movie-slice.js";
import { authReducer } from "./slices/auth-slice.js";
import { authApi } from "services/authServices.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
