import React from 'react';
import { getTodoList } from './api/todolist';

function App() {
  const fetchTodoList = async () => {
    const data = await getTodoList();
    console.log('data', data);
  };

  fetchTodoList();

  return <div style={{ fontSize: '1.4rem' }}>App입니다.</div>;
}

export default App;
