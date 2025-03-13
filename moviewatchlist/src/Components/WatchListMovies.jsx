import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../Css/button";
import { removeWatchList } from "../Redux/WatchlistSlice";

const WatchListMovies = () => {
  const dispatch = useDispatch();
  const { watchListMovies } = useSelector((state) => state.watchlist);

  //   console.log(watchListMovies);

  const handleRemoveList = (movie) => {
    dispatch(removeWatchList(movie.id));
  };

  const handleBackToHome = () => {
    window.location.href = "/home";
  };

  return (
    <div className="trending-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Your Wallet</h1>
        <StyledButton onClick={handleBackToHome} style={{ margin: "0px" }}>
          Back To Home
        </StyledButton>
      </div>
      <div className="trending-movies">
        {watchListMovies.map((movie) => {
          return (
            <div key={movie.id} className="trending-movie">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}
`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <span>⭐{movie.vote_average}</span>
              <br />
              <StyledButton
                onClick={() => {
                  handleRemoveList(movie);
                }}
                style={{ margin: "0px", marginTop: "10px" }}
              >
                Remove
              </StyledButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchListMovies;
