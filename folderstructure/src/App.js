import React, { useState } from "react";
import resources from "./data/folderData.js";
import Folder from "./components/Folder.js";
import useTraverseHook from "./utils/traversehook.js";

function App() {
  const [folderData, setFolderData] = useState(resources);

  const { insertNode } = useTraverseHook();

  const handleInsertNode = (folderId, item, isFolder) => {
    // console.log(folderId, item, isFolder, "from app")
    const finalTree = insertNode(folderData, folderId, item, isFolder);
    console.log(finalTree, "from app")
    setFolderData(finalTree)
  }

  return (
    <div className="App">
      <h1>Marudhu Folder Structure</h1>

      <Folder handleInsertNode={handleInsertNode} explore={folderData} />
    </div>
  );
}

export default App;
