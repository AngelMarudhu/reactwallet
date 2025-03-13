import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Redux/LoginSlice.jsx";
import trendingSlice from "../Redux/TrendingSlice.jsx";
import searchingSlice from "../Redux/SearchingSlice.jsx";
import watchListSlice from "../Redux/WatchlistSlice.jsx";
import similarSlice from "../Redux/SimilarSlice.jsx";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    trending: trendingSlice,
    search: searchingSlice,
    watchlist: watchListSlice,
    similar: similarSlice,
  },
});
