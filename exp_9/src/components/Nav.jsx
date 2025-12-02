import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="p-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex gap-4">
      <Link to="/" className="font-semibold hover:underline">Home</Link>
      <Link to="/form" className="font-semibold hover:underline">Form</Link>
      <Link to="/list" className="font-semibold hover:underline">List (Keys)</Link>
      <Link to="/refs" className="font-semibold hover:underline">Refs</Link>
      <Link to="/about" className="font-semibold hover:underline">About</Link>
    </nav>
  );
}
