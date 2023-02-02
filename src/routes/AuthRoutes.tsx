import LoginPage from '@/pages/LoginPage';
import MainLayout from '@/layout/MainLayout';

const AuthRoutes = {
  path: '/login',
  element: <MainLayout />,
  children: [
    {
      path: '/login',
      element: <LoginPage />,
    },
  ],
};

export default AuthRoutes;
