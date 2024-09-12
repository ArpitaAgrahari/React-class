//you will react app that display a list og user and allow user view detailed informstion of selected user.this app will consit of follwin gcomponents
//1. UserList: display list of user. clicking on a user will trigger callback fucntion.
//2. userprofile: display detailed information of selected user.
//3.app: maannges the data and handles user interaction.it will pass data to UserList and UserProfile components via props.
import React, { useState } from 'react';
import counter from './component/counter';
import './App.css';

function App() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <counter />
      <counter />
    </div>
  );
}
export default App;