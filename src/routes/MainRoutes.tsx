import React from 'react';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';

const TodoListPage = lazy(() => import('@/pages/TodoListPage'));

const RouteGuard = ({ children }: { children: React.ReactNode }): any => {
  const user = false;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

const MainRoutes = {
  path: '/',
  element: (
    <RouteGuard>
      <MainLayout />
    </RouteGuard>
  ),
  children: [
    {
      path: '/',
      element: <TodoListPage />,
    },
  ],
};

export default MainRoutes;
