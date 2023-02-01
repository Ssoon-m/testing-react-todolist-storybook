import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './MainLayout.style';

const MainLayout = () => {
  return (
    <S.MainLayoutWrapper>
      <Outlet />
    </S.MainLayoutWrapper>
  );
};

export default MainLayout;
