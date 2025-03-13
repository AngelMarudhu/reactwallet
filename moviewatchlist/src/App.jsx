import React, { Suspense, lazy } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import WatchListMovies from "./Components/WatchListMovies";
// import MoviesDetails from "./Components/MoviesDetails";
const MoviesDetails = lazy(() => import("./Components/MoviesDetails"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<WatchListMovies />} />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<div>Fetching Movie Details...</div>}>
              <MoviesDetails />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
