import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    loginInitialized: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      // console.log(action.payload.email)
      // we can store them in local storage we can easily retrive them in future buddy
      state.isLoggedIn = true;

      const { uid, displayName, email, photoURL } = action.payload;
      state.user = { uid, displayName, email, photoURL };

      localStorage.setItem(
        "user",
        JSON.stringify({ uid, displayName, email, photoURL })
      );
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginInitialized, loginSuccess, loginFailure, logout } =
  loginSlice.actions;
export default loginSlice.reducer;
