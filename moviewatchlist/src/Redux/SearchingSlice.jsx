import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQwNzNiZmE5OGU3N2Y2OTViNWZkNWMxYjFkY2I1NSIsIm5iZiI6MTYzODI4ODA3NS4wODA5OTk5LCJzdWIiOiI2MWE2NGFjYjNkNGQ5NjAwMmU2NzA5ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jqcINBia3b5cmcCBzKUCm1SOfj51MzCeDds3jTZs8aM";
const BASE_URL = "https://api.themoviedb.org/3";
// const ACCOUNT_ID = 11509388;

export const searchQuery = createAsyncThunk(
  "search/fetch",
  async ({ query, page }) => {
    // console.log(query, page);
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?query=${query}&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const searchingMovies = createSlice({
  name: "search",
  initialState: {
    searchMovies: [],
    totalPages: 1,
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchQuery.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(searchQuery.fulfilled, (state, action) => {
      state.searchMovies = action.payload.results;
      state.totalPages = action.payload.total_pages;
      state.isLoading = false;
    });
    builder.addCase(searchQuery.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setPage } = searchingMovies.actions;

export default searchingMovies.reducer;
