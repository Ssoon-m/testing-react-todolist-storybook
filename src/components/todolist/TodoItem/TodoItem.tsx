import React, { useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import * as S from './TodoItem.style';

const TodoItem = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <S.TodoItemWrapper>
      <CheckBox label={'TodoItem'} checked={checked} onChange={handleChecked} />
      TodoList~
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
