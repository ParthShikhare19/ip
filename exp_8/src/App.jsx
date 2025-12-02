import { useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const users = [
    { name: "Aarav Mehta", age: 26, location: "Mumbai, India" },
    { name: "Priya Sharma", age: 23, location: "Bangalore, India" },
    { name: "Rohan Desai", age: 29, location: "Ahmedabad, India" },
    { name: "Sneha Patil", age: 24, location: "Pune, India" },
    { name: "Karan Kapoor", age: 31, location: "Delhi, India" },
    { name: "Ishita Nair", age: 27, location: "Kochi, India" },
    { name: "Vikram Joshi", age: 30, location: "Jaipur, India" },
    { name: "Neha Verma", age: 25, location: "Chandigarh, India" },
  ];

  return (
    <div className="app-container">
      <h1>React Props and State Demo</h1>
      <p className="description">
        This example demonstrates React Props and State using realistic user data.
      </p>


      <div className="cards-container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            location={user.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
