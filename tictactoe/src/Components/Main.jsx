import React, { useState } from "react";
import "../Css/main.css";
import useTicTacToe from "../CustomHook/usetic-tac-toe";

const Main = () => {
  const { board, isNext, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();

  return (
    <div>
      <div className="header">
        <h3 style={{ fontSize: "1rem" }}>{getStatusMessage()}</h3>
        <button
          style={{ padding: "8px", cursor: "pointer" }}
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((box, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={box !== null}
            >
              {box}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
