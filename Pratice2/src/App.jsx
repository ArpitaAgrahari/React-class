import React, { useState } from 'react';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTaskText = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} setEditTask={setEditTask} editTaskText={editTaskText} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskDone={toggleTaskDone} setEditTask={setEditTask} />
    </div>
  );
}

export default App;





import { createContext } from 'react';
const UserContext =createContext();


const ParentComponent=()=>{

  const user={
    name: xyz,
    age:78;
  };
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Hi </h1>
        <p>Name: {user.name},<Age:>user.age</p>
      </div>
    </UserContext.Provider>

  )
}
export default UserContext;




const AuthContext = createContext({
  logout:()=>{}
});

export const AuthProvider=()=>{
  const [isAuthencicated, setIsAuthencicated]=useState(false);
  const login=()=>{
    console.log("Login...")
    setIsAuthencicated(true)
    console.log("isAuthencicraed",true)
    )
  }
  return(
    <AuthContext.Provider value={(isAuthencicated,login,logout)}>
      {child}
      </AuthContext.Provider>
  )
}

