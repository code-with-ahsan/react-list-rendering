import { useState } from "react";
import "./App.css";

import { UserCard } from "./components/UserCard";
import User from "./classes/User";

function App() {
  const [users, setUsers] = useState([new User(), new User()]);

  const onDelete = (userId: string) => {
    setUsers(users.filter((u) => userId !== u.id));
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          setUsers([new User(), ...users]);
        }}
      >
        Add New
      </button>
      <ul>
        {users.map((user, index) => {
          return <UserCard onDelete={onDelete} user={user} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default App;
