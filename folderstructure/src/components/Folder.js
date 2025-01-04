import React, { useState } from "react";
import "../css/folderStyle.css";

const Folder = ({ explore }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    show: false,
    isFolder: null,
  });

  const handleAddingFiles = (e, isFolder) => {
    e.stopPropagation();
    setExpanded(true);
    setShowInput({ show: true, isFolder });
  };
  return (
    <div className="folder">
      <div className="folder-name">
        <div className="folder-name-text">
          <button onClick={() => setExpanded(!expanded)}>📁</button>
          {explore.name}
        </div>

        <div className="folder-adding-buttons">
          <button onClick={(e) => handleAddingFiles(e, true)}>+Folder</button>
          <button onClick={(e) => handleAddingFiles(e, false)}>-File</button>
        </div>
      </div>

      <div
        style={{
          display: expanded ? "block" : "none",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        {showInput.show && (
          <div>
            <button onClick={() => setShowInput({ show: false })}>❌</button>
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input type="text" placeholder="Enter name" />
          </div>
        )}

        {explore.items.map((item) => {
          return (
            <div key={item.id}>
              {item.isFolder ? (
                <Folder explore={item} />
              ) : (
                <span>📄 {item.name}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
