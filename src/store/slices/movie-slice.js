import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMovie: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
