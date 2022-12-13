import { useEffect, useState } from 'react'
import './App.css'

import { randFullName, randPost} from '@ngneat/falso';

const UserCard = ({user, onDelete}: {user: any, onDelete: (userId: string) => void}) => {
  useEffect(() => {
    console.log(`rendering for ${user.email}`)
  }, [])
  return <li style={{
    border: '1px solid gray',
    margin: '8px 0',
    borderRadius: '6px',
    listStyle: 'none',
    padding: '16px'
  }}>
    <h4>{user.name}</h4>
    <h5>{user.email}</h5>
    <article>
      <h5>{user.post.title}</h5>
      <p>{user.post.body}</p>
    </article>
    <div style={{margin: '10px 0'}}>
      <input style={{width: '60%', padding: '16px', borderRadius: '6px'}} defaultValue={user.email}/>
    </div>
    <button onClick={() => {
      console.time('rendering');
      onDelete(user.id);
    }}>Delete Me</button>
  </li>
}

function newUser() {
  const name = randFullName();
  const email = `${name.toLowerCase().replace(' ', '')}@gmail.com`;
  return {
    email,
    name,
    post: randPost(),
    id: `${email}__${Date.now()}`
  }
}

function App() {
  const [users, setUsers] = useState(
    new Array(10000).fill(0).map(() => newUser())
  );

  useEffect(() => {
    console.timeEnd('rendering')
  }, [users])

  const onDelete = (userId: string) => {
    setUsers(users.filter(u => userId !== u.id))
  }
  
  return (
    <div className="App">
      <button onClick={() => {
        // const newArr = [...users];
        // newArr.splice(4, 0, newUser())
        // setUsers([...newArr])
        setUsers([newUser(), ...users]);
      }}>Add New</button>
      <ul>
        {
          users.map((user, index) => {
            return <UserCard onDelete={onDelete} user={user} key={index}/>
          })
        }
      </ul>
    </div>
  )
}

export default App
