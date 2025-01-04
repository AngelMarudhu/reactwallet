import React, { useState } from "react";
import "../css/treenode.css";
import { useDrag } from "react-dnd";

const TreeNode = ({ block }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TREE_NODE",
    item: { id: block.id, type: block.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="tree-node"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div
        className="tree-node-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        {isOpen ? "📂" : "📁"} {block.type}
      </div>
      {isOpen && block.children.length > 0 && (
        <div
          className="tree-children"
          style={{
            marginLeft: "20px",
          }}
        >
          {block.children.map((child) => (
            <TreeNode key={child.id} block={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
