import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, setEditTask, editTaskText }) => {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (editTask) {
      setTaskText(editTask.text);
    } else {
      setTaskText('');
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      editTaskText(editTask.id, taskText);
      setEditTask(null);
    } else {
      addTask(taskText);
    }
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;