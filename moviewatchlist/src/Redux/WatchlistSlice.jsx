import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchListMovies: JSON.parse(localStorage.getItem("watchListMovies")) || [],
  isThisMovieInWatchList: false,
};

const watchListSlice = createSlice({
  name: "watchlist",
  initialState,

  reducers: {
    addToWatchList: (state, action) => {
      //// before adding to watchlist check if the movie is already in the watchlist
      state.isThisMovieInWatchList = state.watchListMovies.some((movie) => {
        return movie.id === action.payload.id;
      });
      if (!state.isThisMovieInWatchList) {
        state.watchListMovies.push(action.payload);
        localStorage.setItem(
          "watchListMovies",
          JSON.stringify(state.watchListMovies)
        );
      }
    },

    removeWatchList: (state, action) => {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem(
        "watchListMovies",
        JSON.stringify(state.watchListMovies)
      );
    },
  },
});

export const { addToWatchList, removeWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
