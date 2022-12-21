import React from 'react';
import TodoList from '../TodoList';
import TodoInputBox from '../TodoInput/TodoInputBox';
import * as S from './TodoListBox.style';

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
      <TodoList />
    </S.Container>
  );
};

export default TodoListBox;
