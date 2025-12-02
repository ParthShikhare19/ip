import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ListItemDetail from "./ListItemDetail";

let idCounter = 2;

export default function ListPage() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Projects" },
  ]);
  const [text, setText] = useState("");

  function addItem() {
    if (!text.trim()) return;
    setItems([{ id: ++idCounter, text }, ...items]);
    setText("");
  }

  function removeItem(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">List & Keys</h2>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 border rounded flex-1"
          placeholder="Add new item"
        />
        <button onClick={addItem} className="px-4 py-2 bg-sky-600 text-white rounded">
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-3 border rounded">
            <Link to={`/list/${item.id}`} className="font-medium hover:underline">
              {item.text}
            </Link>
            <button
              onClick={() => removeItem(item.id)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=":id" element={<ListItemDetail items={items} />} />
      </Routes>
    </div>
  );
}
