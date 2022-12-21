import React from 'react';
import * as S from './ThreeDots.styled';
import { ReactComponent as ThreeDots } from '@/assets/three-dots.svg';
const ThreeDotsButton = () => {
  const handleButton = () => {};

  return (
    <S.Button>
      <ThreeDots width="15" height="15" />
    </S.Button>
  );
};

export default ThreeDotsButton;
