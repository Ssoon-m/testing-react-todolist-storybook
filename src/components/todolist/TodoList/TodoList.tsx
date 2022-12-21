import React from 'react';
import TodoItem from '../TodoItem';
import * as S from './TodoList.style';
const TodoList = () => {
  const arrayData = Array.from({ length: 10 }, (_, i) => `checkBox${i + 1}`);
  return (
    <S.Container>
      {arrayData.map((item) => (
        <TodoItem key={item} id={item} label={item} />
      ))}
    </S.Container>
  );
};

export default TodoList;
