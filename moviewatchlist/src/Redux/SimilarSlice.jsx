import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQwNzNiZmE5OGU3N2Y2OTViNWZkNWMxYjFkY2I1NSIsIm5iZiI6MTYzODI4ODA3NS4wODA5OTk5LCJzdWIiOiI2MWE2NGFjYjNkNGQ5NjAwMmU2NzA5ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jqcINBia3b5cmcCBzKUCm1SOfj51MzCeDds3jTZs8aM";
const BASE_URL = "https://api.themoviedb.org/3";
// const ACCOUNT_ID = 11509388;

const initialState = {
  similarList: [],
  loading: false,
  error: null,
};

export const fetchingSimilarMovies = createAsyncThunk(
  "similar/movies",
  async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}/similar`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      console.log(response.data);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

const similarMovies = createSlice({
  name: "similar",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchingSimilarMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchingSimilarMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.similarList = action.payload;
    });
    builder.addCase(fetchingSimilarMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default similarMovies.reducer;
