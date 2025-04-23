import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

let TaskForm = () => {
  let [task, setTask] = useState('');
  let dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task } });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;