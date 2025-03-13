import React, { useState } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deActivateCells = (newOrder) => {
    // console.log("done");
    const reverseOrder = [...newOrder].reverse();

    /// we need follow which index we deactivated
    let index = 0;

    let timer = setInterval(() => {
      if (index >= reverseOrder.length) {
        clearInterval(timer);
        setOrder([]);
        setIsDeactivating(false);
        return;
      } else {
        setOrder((currentOrder) =>
          currentOrder.filter(
            (item) =>
              !(
                item.rowIndex === reverseOrder[index]?.rowIndex &&
                item.colIndex === reverseOrder[index]?.colIndex
              )
          )
        );
        index++;
      }
    }, 500);
  };

  const activateCells = (colIndex, rowIndex) => {
    // console.log(rowIndex, colIndex);
    const newOrder = [...order, { rowIndex, colIndex }];
    setOrder(newOrder);
    //// filter boolean work is here remove falsy values here 0 is falsy value isn't that's why we use filter
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      setTimeout(() => {
        deActivateCells(newOrder);
        setIsDeactivating(true);
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center m-auto flex-col gap-5">
      <h1>Grid Lights</h1>
      {config.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            style={{
              gridTemplateColumns: `repeat(${row.length},1fr)`,
            }}
            className="grid grid-cols-3 gap-6 max-w-[300px] w-full"
          >
            {row.map((cell, colIndex) => {
              return cell ? (
                <Cell
                  key={colIndex}
                  filled={order?.some(
                    (item) =>
                      item.colIndex === colIndex && item.rowIndex === rowIndex
                  )}
                  onClick={() => activateCells(colIndex, rowIndex)}
                  isDisabled={order?.some(
                    (item) =>
                      item.colIndex === colIndex && item.rowIndex === rowIndex
                  )}
                />
              ) : (
                <span key={colIndex} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
