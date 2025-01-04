import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import LeftPanel from "./components/Leftside";
import RightPanel from "./components/Rightside";
import Canvas from "./components/CanvasSpace";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item1", panel: "left" },
    { id: 2, name: "item2", panel: "left" },
  ]);

  const moveItem = (id, newPanel) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, panel: newPanel } : item))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <LeftPanel items={items} moveItem={moveItem} />
        <Canvas moveItem={moveItem} />
        <RightPanel items={items} moveItem={moveItem} />
      </div>
    </DndProvider>
  );
}
