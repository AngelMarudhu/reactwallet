import React from "react";

const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  //   console.log(pages);

  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span>⬅️</span>
      </button>

      {pages.map((page, index) => (
        <button
          style={{ padding: "5px", margin: "5px" }}
          key={index}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <span>
        Page {currentPage} of {totalPage}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <span>▶️</span>
      </button>
    </div>
  );
};

export default Pagination;
