import React from "react";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={() => {
        onClick();
      }}
      style={{
        backgroundColor: filled ? "red" : "transparent",
      }}
      className="cursor-pointer bg-transparent border-2 h-20 disabled:cursor-not-allowed"
    />
  );
};

export default Cell;
