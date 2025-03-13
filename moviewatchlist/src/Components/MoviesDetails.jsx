import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { StyledButton } from "../Css/button";
import SimilarMovies from "./SimilarMovies";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQwNzNiZmE5OGU3N2Y2OTViNWZkNWMxYjFkY2I1NSIsIm5iZiI6MTYzODI4ODA3NS4wODA5OTk5LCJzdWIiOiI2MWE2NGFjYjNkNGQ5NjAwMmU2NzA5ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jqcINBia3b5cmcCBzKUCm1SOfj51MzCeDds3jTZs8aM";
const BASE_URL = "https://api.themoviedb.org/3";

const MoviesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  //   console.log(id);

  useEffect(() => {
    const fetchingMoviesDetails = async () => {
      const url = `${BASE_URL}/movie/${id}`;
      try {
        const result = await axios.get(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        // console.log(result);
        setMovie(result.data);
      } catch (error) {
        console.log("something went wrong : ", error);
      }
    };
    fetchingMoviesDetails();
  }, [id]);

  //   console.log(movie);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return `${hours}h ${minute}m`;
  };

  return (
    <div
      className="movie-details-container"
      style={{ padding: "10px 20px", height: "100vh" }}
    >
      <StyledButton
        style={{ margin: "0px", marginBottom: "1rem" }}
        onClick={() => navigate(-1)}
      >
        🔙 Back
      </StyledButton>
      {movie && (
        <div className="movie-details" style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <img
              style={{
                width: "300px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}
`}
              alt={movie.title}
            />
          </div>
          <div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h2>Title: {movie.title}</h2>
            <p>
              Duration: <strong>{formatTime(movie.runtime)}</strong>
            </p>
            <p>
              Overview: <strong>{movie.overview}</strong>
            </p>
            <p>Rating: {Math.ceil(movie.vote_average)}</p>
            <p>
              Language: <strong>{movie.original_language}, tamil</strong>
            </p>
          </div>
        </div>
      )}
      <SimilarMovies id={id} />
    </div>
  );
};

export default MoviesDetails;
