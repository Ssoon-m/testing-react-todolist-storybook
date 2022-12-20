import React from 'react';
import * as S from './MainLayout.style';
interface Props {
  children: React.ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return <S.MainLayoutWrapper>{children}</S.MainLayoutWrapper>;
};

export default MainLayout;
