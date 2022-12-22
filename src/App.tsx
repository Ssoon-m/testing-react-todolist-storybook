import React from 'react';
import TodoListPage from './pages/TodoListPage';
import MainLayout from './layout/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <TodoListPage />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
