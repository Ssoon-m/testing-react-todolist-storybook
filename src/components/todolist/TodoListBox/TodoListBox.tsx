import React from 'react';
import TodoList from '../TodoList';
import TodoInputBox from '../TodoInput/TodoInputBox';
import * as S from './TodoListBox.style';
const TodoListBox = () => {
  return (
    <S.Container>
      <div>
        <h2>Hello, Soonmin</h2>
        <h3>It's Wednesday, Dec 14</h3>
      </div>
      <TodoInputBox />
      <TodoList />
    </S.Container>
  );
};

export default TodoListBox;
