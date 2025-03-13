import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash"; // Import lodash for unique filtering

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQwNzNiZmE5OGU3N2Y2OTViNWZkNWMxYjFkY2I1NSIsIm5iZiI6MTYzODI4ODA3NS4wODA5OTk5LCJzdWIiOiI2MWE2NGFjYjNkNGQ5NjAwMmU2NzA5ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jqcINBia3b5cmcCBzKUCm1SOfj51MzCeDds3jTZs8aM";
const BASE_URL = "https://api.themoviedb.org/3";
const ACCOUNT_ID = 11509388;

export const fetchTrendingMovies = createAsyncThunk(
  "trending/fetch",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
        params: { page },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      return { movies: response.data.results, page };
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return rejectWithValue(error.message);
    }
  }
);

const trendingMovies = createSlice({
  name: "trending",
  initialState: {
    trendingMovies: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetTrendingMovies: (state) => {
      state.trendingMovies = [];
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentPage = action.payload.page;
      state.trendingMovies = _.uniqBy(
        [...state.trendingMovies, ...action.payload.movies],
        "id"
      );
    });
    builder.addCase(fetchTrendingMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { resetTrendingMovies } = trendingMovies.actions;

export default trendingMovies.reducer;
