import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
// import MoviesDetails from "./Components/MoviesDetails";

const MoviesDetails = lazy(() => import("./Components/MoviesDetails"));
const Home = lazy(() => import("./Pages/Home"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const WatchListMovies = lazy(() => import("./Components/WatchListMovies"));

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
