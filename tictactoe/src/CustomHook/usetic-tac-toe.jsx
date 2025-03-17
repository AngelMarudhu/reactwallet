import { useState } from "react";
import React from "react";

const boardBox = () => new Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(boardBox());
  const [isNext, setIsNext] = useState(true);

  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], /// 0 to 2 all row
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // 3 to 5 all column
    [0, 4, 8],
    [2, 4, 6], // 6 to 7 both diagonal
  ];

  const calculateWinner = (board) => {
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner) {
      return alert("Game Over");
    }
    const newBoard = [...board];
    newBoard[index] = isNext ? "❌" : "⭕";
    setBoard(newBoard);
    setIsNext(!isNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);

    if (winner) {
      return `Winner is ${winner}🎮`;
    }

    let isBoardFull = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        isBoardFull = false;
        break;
      }
    }

    if (isBoardFull) {
      return "Game is Draw";
    }

    return `Next Player is ${isNext ? "❌" : "⭕"}`;
  };

  const resetGame = () => {
    setBoard(boardBox);
    setIsNext(true);
  };

  return {
    board,
    handleClick,
    isNext,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
