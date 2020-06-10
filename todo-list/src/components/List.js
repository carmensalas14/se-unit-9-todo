import React from 'react';
import Task from './Task';

const List = ({ tasks, toggleTodo }) => (
  <ul>
    {tasks.map((task) => (
      <Task />
    ))}
  </ul>
);

export default List;
