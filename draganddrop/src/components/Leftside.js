import React from "react";
import DraggableItem from "../utility/Draggableitem";

const LeftPanel = ({ items, moveItem }) => {
  // console.log(items, moveItem);

  const leftItems = items.filter((item) => {
    return item.panel === "left";
  });

  return (
    <div>
      <h2>Left Panel</h2>
      {leftItems.map((item) => {
        return <DraggableItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default LeftPanel;
