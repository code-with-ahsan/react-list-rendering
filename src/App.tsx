import { useEffect, useState } from "react";
import "./App.css";

import { UserCard } from "./components/UserCard";
import User from "./classes/User";

function App() {
  const [users, setUsers] = useState(
    new Array(4000).fill(0).map(() => new User())
  );

  const onDelete = (userId: string) => {
    setUsers(users.filter((u) => userId !== u.id));
  };

  useEffect(() => {
    console.timeEnd("rendering");
  }, [users]);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.time("rendering");
          setUsers([new User(), ...users]);
        }}
      >
        Add New
      </button>
      <ul>
        {users.map((user, index) => {
          return <UserCard onDelete={onDelete} user={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
}

export default App;
