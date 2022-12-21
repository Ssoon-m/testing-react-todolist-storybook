import React, { useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import * as S from './TodoItem.style';
import ThreeDotsButton from '@/components/common/ThreeDotsButton';

interface Props {
  id?: string;
  label: string;
}

const TodoItem = ({ id, label }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <S.TodoItemWrapper>
      <CheckBox
        id={id}
        checked={checked}
        label={label}
        onChange={handleChecked}
      />
      <ThreeDotsButton />
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
