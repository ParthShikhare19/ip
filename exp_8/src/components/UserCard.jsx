import "./UserCard.css";

function UserCard({ name, age, location }) {
  return (
    <div className="user-card">
      <div className="avatar">
        <span>{name.charAt(0)}</span>
      </div>
      <h2 className="user-name">{name}</h2>
      <p className="user-detail">
        <strong>Age:</strong> {age}
      </p>
      <p className="user-detail">
        <strong>Location:</strong> {location}
      </p>
    </div>
  );
}

export default UserCard;
