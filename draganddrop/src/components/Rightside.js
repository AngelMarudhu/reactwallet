import React from "react";
import { useDrop } from "react-dnd";

const itemType = "ITEM";

const RightPanel = ({ items, moveItem }) => {
  const [, dropRef] = useDrop({
    accept: itemType,
    drop: (draggedItem) => {
      moveItem(draggedItem.id, "right");
    },
  });

  const righItems = items.filter((item) => {
    return item.panel === "right";
  });

  return (
    <div ref={dropRef} style={{ width: "30%", border: "1px solid red" }}>
      <h2>Right Panel</h2>

      {righItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default RightPanel;
