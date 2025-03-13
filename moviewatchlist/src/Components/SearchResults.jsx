import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToWatchList } from "../Redux/WatchlistSlice";
import { StyledButton } from "../Css/button";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { searchMovies, isLoading, error, totalPages, currentPage } =
    useSelector((state) => state.search);

  // console.log(searchMovies);

  const { watchListMovies, isThisMovieInWatchList } = useSelector(
    (state) => state.watchlist
  );

  const handleAddToWatchList = (movie) => {
    for (let i = 0; i < watchListMovies.length; i++) {
      if (watchListMovies[i].id === movie.id) {
        alert("Movie already in watchlist");
        return;
      }
    }

    dispatch(addToWatchList(movie));
  };

  return (
    <div className="trending-container">
      {searchMovies.length === 0 ? <p></p> : <h1>Search Results</h1>}

      {isLoading && <p>Loading...</p>}
      <div className="trending-movies">
        {searchMovies.map((movie) =>
          movie.poster_path ? (
            <div key={movie.id} className="trending-movie">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <span>⭐{movie.vote_average}</span>
              <br />
              <StyledButton
                style={{
                  margin: "0px",
                }}
                onClick={() => {
                  handleAddToWatchList(movie);
                }}
              >
                ➕Add To WatchList
              </StyledButton>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchResults;
