import React, { useEffect, useRef } from "react";
import { fetchingSimilarMovies } from "../Redux/SimilarSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { StyledButton } from "../Css/button";
import { addToWatchList } from "../Redux/WatchlistSlice";

const SimilarMovies = ({ id }) => {
  const hasSimilarMovies = useRef(false);
  //   console.log(id);

  const { similarList, loading } = useSelector((state) => state.similar);
  const { watchListMovies, isThisMovieInWatchList } = useSelector(
    (state) => state.watchlist
  );

  //   console.log(similarList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasSimilarMovies.current) {
      dispatch(fetchingSimilarMovies(id));
      hasSimilarMovies.current = true;
    }
  }, []);

  const handleAddToWatchList = (movie) => {
    const isMovieInWatchlist = watchListMovies.some((m) => m.id === movie.id);

    if (isMovieInWatchlist) {
      alert("Movie already in watchlist");
      return;
    }
    dispatch(addToWatchList(movie));
  };

  return (
    <div className="trending-container">
      <h1>Similar Movies</h1>

      {loading && <p>Loading...</p>}
      <div className="trending-movies">
        {similarList.map((movie) => {
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

export default SimilarMovies;
