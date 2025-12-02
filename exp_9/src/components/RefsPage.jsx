import { useRef, useState, useEffect } from "react";

export default function RefsPage() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [log, setLog] = useState([]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleRead() {
    const v = inputRef.current?.value || "";
    setLog((prev) => [`Read via ref: "${v}"`, ...prev].slice(0, 10));
  }

  function handleUpdateState() {
    setValue(inputRef.current?.value || "");
  }

  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Refs Demo</h2>
      <input
        ref={inputRef}
        className="p-2 border rounded w-full"
        placeholder="Type something..."
        defaultValue={value}
      />
      <div className="mt-3 flex gap-2">
        <button onClick={handleRead} className="px-4 py-2 bg-indigo-600 text-white rounded">
          Read via ref
        </button>
        <button onClick={handleUpdateState} className="px-4 py-2 bg-gray-200 rounded">
          Sync to state
        </button>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">State value</h4>
        <div className="p-2 border rounded mt-1">{value || <span className="text-gray-400">(empty)</span>}</div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Action log</h4>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {log.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
