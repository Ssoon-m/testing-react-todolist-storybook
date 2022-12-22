import React, { Suspense } from 'react';
import TodoItem from '../TodoItem';
import { useGetTodoList } from '@/api/todo';
import * as S from './TodoList.style';

const TodoList = () => {
  const { data } = useGetTodoList();
  return (
    <S.Container>
      {data?.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          label={item.todo}
          isChecked={item.isChecked}
        />
      ))}
    </S.Container>
  );
};

export default TodoList;
