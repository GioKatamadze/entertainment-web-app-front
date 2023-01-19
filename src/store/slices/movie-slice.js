import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMovies: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
