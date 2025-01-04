import React from "react";
import TreeNode from "./TreeNode";

const Leftside = ({ blocks, setBlocks }) => {
  const addBlock = () => {
    const newBlock = {
      id: `${Date.now()}`,
      type: "block",
      position: { x: 100, y: 100, width: 200, height: 200 },
      children: [],
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="left-side" style={{ width: "20%" }}>
      <h2>Left side</h2>
      <button onClick={addBlock}> Add Block</button>

      {blocks.map((block) => {
        return <TreeNode key={block.id} block={block} />;
      })}
    </div>
  );
};

export default Leftside;
