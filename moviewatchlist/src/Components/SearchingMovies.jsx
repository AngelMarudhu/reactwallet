import React, { useState } from "react";
import { searchQuery } from "../Redux/SearchingSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../Redux/SearchingSlice";

const SearchingMovies = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { searchMovies, totalPages, currentPage } = useSelector(
    (state) => state.search
  );

  // console.log(totalPages, currentPage);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(searchQuery({ query: query, page: currentPage }));
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
      dispatch(searchQuery({ query: query, page: currentPage + 1 }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
      dispatch(searchQuery({ query: query, page: currentPage - 1 }));
    }
  };

  return (
    <div style={{ marginTop: "1rem", padding: "10px 20px" }}>
      <input
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
        }}
        type="text"
        placeholder="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleSearch}
      >
        Search
      </button>

      {searchMovies.length === 0 ? (
        <p>No Result Found</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{
              padding: "10px 20px",
              backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              opacity: currentPage === 1 ? 0.6 : 1,
            }}
          >
            ◀ Previous
          </button>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
            style={{
              padding: "10px 20px",
              backgroundColor: currentPage >= totalPages ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
              opacity: currentPage >= totalPages ? 0.6 : 1,
            }}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchingMovies;
