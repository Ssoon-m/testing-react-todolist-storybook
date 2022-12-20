import React from 'react';
import { getTodoList } from './api/todolist';
import TodoListPage from './pages/TodoListPage';
import MainLayout from './layout/MainLayout';
function App() {
  const fetchTodoList = async () => {
    const data = await getTodoList();
    console.log('data', data);
  };

  fetchTodoList();

  return (
    <MainLayout>
      <TodoListPage />
    </MainLayout>
  );
}

export default App;
