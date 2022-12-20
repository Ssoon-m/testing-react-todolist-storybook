import React from 'react';
import { getTodoList } from './api/todolist';
import TodoListPage from './pages/TodoListPage';

function App() {
  const fetchTodoList = async () => {
    const data = await getTodoList();
    console.log('data', data);
  };

  fetchTodoList();

  return <TodoListPage />;
}

export default App;
