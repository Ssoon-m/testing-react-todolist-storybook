import React, { Suspense } from 'react';
import TodoList from '../TodoList';
import TodoInputBox from '../TodoInput/TodoInputBox';
import * as S from './TodoListBox.style';
import QueryErrorBoundary from '@/components/common/QueryErrorBoundary';

const dayOptions = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
} as const;

const TodoListBox = () => {
  return (
    <S.Container>
      <div>
        <h2>Hello, Soonmin</h2>
        <h3>{`It's ${new Intl.DateTimeFormat('en-us', dayOptions).format(
          new Date(),
        )}`}</h3>
      </div>
      <TodoInputBox />
      <Suspense fallback={<div>Loading.....</div>}>
        <QueryErrorBoundary>
          <TodoList />
        </QueryErrorBoundary>
      </Suspense>
    </S.Container>
  );
};

export default TodoListBox;
