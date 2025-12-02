import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!values.email.includes("@")) e.email = "Must be a valid email";
    const ageNum = Number(values.age);
    if (!values.age || Number.isNaN(ageNum) || ageNum <= 0)
      e.age = "Enter a valid age";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmittedData(form);
      setTimeout(() => navigate("/list"), 500);
    }
  }

  function handleReset() {
    setForm({ name: "", email: "", age: "" });
    setErrors({});
    setSubmittedData(null);
  }

  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Controlled Form (Hooks + Events)</h2>
      <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Your name"
          />
          {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            placeholder="you@example.com"
          />
          {errors.email && <div className="text-red-600 mt-1">{errors.email}</div>}
        </div>

        <div>
          <label className="block font-medium">Age</label>
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Age"
            type="number"
          />
          {errors.age && <div className="text-red-600 mt-1">{errors.age}</div>}
        </div>

        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
            Submit
          </button>
          <button type="reset" className="px-4 py-2 bg-gray-200 rounded">
            Reset
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 border rounded bg-green-50">
          <h3 className="font-semibold">Submitted</h3>
          <pre className="text-sm">{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
