import React,{useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const INITIAL_USERS = [];


function App() {

  const [users, setUsers] = useState(INITIAL_USERS);

  const addUser = (user) => {
    setUsers((previousExpenses) => {
      return [user, ...previousExpenses];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
