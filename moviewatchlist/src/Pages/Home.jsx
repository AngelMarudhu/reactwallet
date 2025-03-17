import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledButton } from "../Css/button";
import "../Css/homepage.css";
import { logout } from "../Redux/LoginSlice";
import { useNavigate } from "react-router";
import TrendingMovies from "../Components/TrendingMovies";
import SearchResults from "../Components/SearchResults";
import SearchingMovies from "../Components/SearchingMovies";
import { FaUser } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((state) => {
    return state.login;
  });
  const { watchListMovies, isThisMovieInWatchList } = useSelector(
    (state) => state.watchlist
  );
  //   console.log(isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleWatchList = () => {
    navigate("/watchlist");
  };

  return (
    <div>
      <header className="home-header">
        {user && (
          <>
            <h3>{user.displayName}</h3>
            <section>
              <StyledButton style={{ margin: "0px" }} onClick={handleLogout}>
                Logout
              </StyledButton>
            </section>

            <StyledButton onClick={handleWatchList} style={{ margin: "0px" }}>
              WatchList{" "}
              <span style={{ color: "red", marginLeft: "10px" }}>
                {watchListMovies.length}
              </span>
            </StyledButton>

            <section>
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Marudhu"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "5px solid black",
                  }}
                />
              ) : (
                <div>
                  <FaUser />
                </div>
              )}
            </section>
          </>
        )}
      </header>
      <div>
        <SearchingMovies />
        <SearchResults />
        <TrendingMovies />
      </div>
    </div>
  );
};

export default Home;
