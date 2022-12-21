import React from 'react';
import * as S from './ThreeDots.styled';
import { ReactComponent as ThreeDots } from '@/assets/three-dots.svg';

interface Props {
  onClick: () => void;
}
const ThreeDotsButton = ({ onClick }: Props) => {
  return (
    <S.Button onClick={onClick}>
      <ThreeDots width={15} height={15} />
    </S.Button>
  );
};

export default ThreeDotsButton;
