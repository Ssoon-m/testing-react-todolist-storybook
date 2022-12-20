import React from 'react';
import TodoItem from '../TodoItem';
const TodoList = () => {
  const arrayData = Array.from({ length: 10 }, (_, i) => `checkBox${i + 1}`);
  return (
    <div>
      {arrayData.map((item) => (
        <TodoItem key={item} id={item} label={item} />
      ))}
    </div>
  );
};

export default TodoList;
