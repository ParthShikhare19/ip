import React, { useState } from "react";
import "./Form.css"; // External CSS file (styles below)

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    tel: "",
    address: "",
    age: "",
    gender: "",
    hobbies: [],
    technology: "Java",
    info: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const hobbies = checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value);
        return { ...prev, hobbies };
      });
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, tel, age } = formData;

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      alert("Username should not contain numbers");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }

    if (age < 8 || age > 80) {
      alert("Age should be between 8 and 80");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(tel)) {
      alert("Phone number should contain exactly 10 digits");
      return;
    }

    const pname = prompt("Enter your name");
    if (pname !== null) {
      const conf = confirm("Do you want to submit?");
      if (conf) {
        alert("Confirm Successful");
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    const pname = prompt("Enter your name");
    if (pname !== null) {
      const conf = confirm("Do you want to cancel?");
      if (conf) {
        alert("Cancel Successful");
        setFormData({
          name: "",
          password: "",
          tel: "",
          address: "",
          age: "",
          gender: "",
          hobbies: [],
          technology: "Java",
          info: "",
        });
      }
    }
  };

  return (
    <div>
      <h1>Don Bosco Institute of Technology</h1>
      <h3>Department of Information Technology</h3>
      <h2>TE Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Username :</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your username"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Password :</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Phone No. :</label>
        <input
          type="tel"
          name="tel"
          placeholder="Enter your phone number"
          value={formData.tel}
          onChange={handleChange}
          required
        />

        <label>Address :</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />

        <label>Age :</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <div className="inline-options">
          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
        </div>

        <div className="inline-options">
          <label>Hobbies :</label>
          <input
            type="checkbox"
            name="hobby"
            value="Sports"
            checked={formData.hobbies.includes("Sports")}
            onChange={handleChange}
          />{" "}
          Sports
          <input
            type="checkbox"
            name="hobby"
            value="Reading"
            checked={formData.hobbies.includes("Reading")}
            onChange={handleChange}
          />{" "}
          Reading
          <input
            type="checkbox"
            name="hobby"
            value="Music"
            checked={formData.hobbies.includes("Music")}
            onChange={handleChange}
          />{" "}
          Music
        </div>

        <label>Technology :</label>
        <select
          name="technology"
          value={formData.technology}
          onChange={handleChange}
        >
          <option value="Java">Java</option>
          <option value="C">C</option>
          <option value="Python">Python</option>
        </select>

        <label>Personal Information :</label>
        <textarea
          name="info"
          placeholder="Enter your personal information"
          value={formData.info}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button type="reset" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
