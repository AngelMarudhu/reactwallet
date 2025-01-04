import React, { useState } from "react";
import resources from "./data/folderData.js";
import Folder from "./components/Folder.js";

function App() {
  const [folderData, setFolderData] = useState(resources);

  return (
    <div className="App">
      <h1>Marudhu Folder Structure</h1>

      <Folder explore={folderData} />
    </div>
  );
}

export default App;
