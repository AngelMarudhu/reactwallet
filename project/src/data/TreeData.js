const initialData = [
  {
    id: "1",
    type: "block",
    position: { x: 100, y: 100, width: 200, height: 200 },
    children: [
      {
        id: "1-1",
        type: "label",
        position: { x: 10, y: 10, width: 180, height: 30 },
        children: [],
      },
      {
        id: "1-2",
        type: "image",
        position: { x: 10, y: 50, width: 180, height: 30 },
        children: [],
      },
    ],
  },
  {
    id: "2",
    type: "block",
    position: { x: 300, y: 100, width: 200, height: 200 },
    children: [
      {
        id: "2-1",
        type: "button",
        position: { x: 10, y: 10, width: 180, height: 30 },
        children: [],
      },
    ],
  },
];

export default initialData;
