import React, { useEffect, useCallback } from "react";
import "../Css/Trending.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingMovies,
  resetTrendingMovies,
} from "../Redux/TrendingSlice";
import { StyledButton } from "../Css/button";
import { addToWatchList } from "../Redux/WatchlistSlice";
import { Link } from "react-router";
import _ from "lodash";

const TrendingMovies = () => {
  const dispatch = useDispatch();

  const { trendingMovies, isLoading, currentPage } = useSelector(
    (state) => state.trending
  );

  const { watchListMovies, isThisMovieInWatchList } = useSelector(
    (state) => state.watchlist
  );

  // console.log(currentPage);

  const handleScroll = useCallback(
    _.throttle(() => {
      // console.log(document.documentElement.offsetHeight);

      if (document.documentElement.scrollTop === 0) {
        dispatch(resetTrendingMovies());
      }

      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        dispatch(fetchTrendingMovies(currentPage + 1));
      }
    }, 1000),
    [dispatch, currentPage]
  );

  useEffect(() => {
    if (trendingMovies.length === 0) {
      dispatch(fetchTrendingMovies(1));
    }
  }, [dispatch, trendingMovies.length]);

  const handleAddToWatchList = (movie) => {
    const isMovieInWatchlist = watchListMovies.some((m) => m.id === movie.id);

    if (isMovieInWatchlist) {
      alert("Movie already in watchlist");
      return;
    }
    dispatch(addToWatchList(movie));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="trending-container">
      <h1>Trending Movies</h1>

      {isLoading && <p>Loading...</p>}
      <div className="trending-movies">
        {trendingMovies.map((movie) => {
          return (
            <div key={movie.id} className="trending-movie">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}
`}
                  alt={movie.title}
                />
              </Link>
              <h3>{movie.title}</h3>
              <span>⭐{movie.vote_average}</span>
              <br />
              <StyledButton
                onClick={() => {
                  handleAddToWatchList(movie);
                }}
              >
                ➕ Add To WatchList
              </StyledButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingMovies;
