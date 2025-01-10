import React, { useState } from "react";
import "../css/folderStyle.css";
import useTraverseHook from "../utils/traversehook";

const Folder = ({ explore, handleInsertNode }) => {
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


  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setShowInput({ ...showInput, show: false });
      handleInsertNode(explore.id, e.target.value, showInput.isFolder)
    }
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
          padding: "10px",
        }}
      >
        {showInput.show && (
          <div>
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input autoFocus type="text" placeholder="Enter name" onKeyDown={(e) => { onAddFolder(e) }} onBlur={() => { setShowInput({ show: false }) }} />
          </div>
        )}

        {explore.items.map((item) => {
          return (
            <div key={item.id}>
              {item.isFolder ? (
                <Folder handleInsertNode={handleInsertNode} explore={item} />
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
