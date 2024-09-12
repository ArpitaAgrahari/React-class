import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskDone, setEditTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => toggleTaskDone(task.id)}>Done</button>
          <button onClick={() => setEditTask(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;