import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

let TaskList = () => {
  let tasks = useSelector((state) => state.tasks);
  let dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;