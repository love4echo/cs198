// holds the central state (tasks) and manages updates through actions (you will need to create this file).
import { useReducer } from 'react';
import { createStore } from 'redux';

let initialState = { tasks: [] };

useReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
}

let reduxStore = createStore(useReducer, initialState);

export default reduxStore;