import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import FormPage from "./components/FormPage";
import ListPage from "./components/ListPage";
import RefsPage from "./components/RefsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/list/*" element={<ListPage />} />
            <Route path="/refs" element={<RefsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div className="p-6">Page not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
