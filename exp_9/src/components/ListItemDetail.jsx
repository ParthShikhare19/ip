import { useParams } from "react-router-dom";

export default function ListItemDetail({ items }) {
  const { id } = useParams();
  const item = items.find((it) => String(it.id) === id);

  if (!item) return <div className="p-4">Item not found.</div>;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h3 className="font-semibold">Item detail</h3>
      <p>ID: {item.id}</p>
      <p>Text: {item.text}</p>
    </div>
  );
}
