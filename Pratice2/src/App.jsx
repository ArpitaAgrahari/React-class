//you will react app that display a list og user and allow user view detailed informstion of selected user.this app will consit of follwin gcomponents
//1. UserList: display list of user. clicking on a user will trigger callback fucntion.
//2. userprofile: display detailed information of selected user.
//3.app: maannges the data and handles user interaction.it will pass data to UserList and UserProfile components via props.
import React, { useState } from 'react';
import UserList from './component/UserList';
import UserProfile from './component/UserProfile';

const App = () => {
  const [users] = useState([
    { id: 1, name: 'cde', email: 'cde@example.com', phone: '123-456-7890' },
    { id: 2, name: 'def', email: 'def@example.com', phone: '098-765-4321' },
    { id: 3, name: 'abc', email: 'abc@exmaple.com',phone: '123-456-7890' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <UserList users={users} onUserClick={handleUserClick} />
      <UserProfile user={selectedUser} />
    </div>
  );
};

export default App;