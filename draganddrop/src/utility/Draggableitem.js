import React from "react";
import { useDrag } from "react-dnd";

const ItemType = "ITEM";

const DraggableItem = ({ item }) => {
  console.log(item);

  const [, dragRef] = useDrag({
    type: ItemType,
    item: { id: item.id },
  });

  return (
    <div
      ref={dragRef}
      style={{
        padding: "10px",
        margin: "px",
        border: "2px solid green",
        backgroundColor: "blue",
        cursor: "move",
      }}
    >
      {item.name}
    </div>
  );
};

export default DraggableItem;
