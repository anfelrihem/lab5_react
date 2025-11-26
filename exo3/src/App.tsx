import { useState } from "react";
import "./App.css";


interface User {
  username: string;
  password: string;
}


export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      setUsers([...users, { username, password }]);
      setUsername("");
      setPassword("");
    }
  };


  const handleDelete = (indexToDelete: number) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <h2>Authentication Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
