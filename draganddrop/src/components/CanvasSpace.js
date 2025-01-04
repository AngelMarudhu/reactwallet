import React from "react";
import { useDrop } from "react-dnd";

const ItemType = "ITEM";

const Canvas = ({ moveItem }) => {
  const [, dropRef] = useDrop({
    accept: ItemType,
    drop: (droppedItem) => {
      moveItem(droppedItem.id, "canvas");
    },
  });

  return (
    <div
      ref={dropRef}
      style={{
        width: "30%",
        border: "2px dashed black",
        padding: "10px",
        minHeight: "200px",
      }}
    >
      <h3>Canvas</h3>
      <p>Drag items here!</p>
    </div>
  );
};

export default Canvas;
