import React, { useRef, useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import useMultipleKeyDown from '@/hooks/useMultipleKeyDown';
import * as S from './TodoInputBox.style';
import { usePostTodo } from '@/api/todo';

const TodoInputBox = () => {
  const [input, setInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate } = usePostTodo();

  const handleFocusInput = () => {
    inputRef.current?.focus();
    setIsFocus(true);
  };

  useMultipleKeyDown({
    keyValue: ['Meta', 'k'],
    triggerEvent: handleFocusInput,
  });

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleBlurInput = () => {
    input && mutate({ todo: input });
    setInput('');
    setIsFocus(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <S.TodoInputWrapper onClick={handleFocusInput} isFocus={isFocus}>
      <S.TodoInputBox>
        {isFocus && (
          <CheckBox
            id="inputCheckBox"
            checked={checked}
            onChange={handleChecked}
          />
        )}
        <S.Field>
          {!input && (
            <S.PlaceHolder htmlFor="input-todo" isFocus={isFocus}>
              Create new task
            </S.PlaceHolder>
          )}
          <S.TodoInput
            id="input-todo"
            ref={inputRef}
            onBlur={handleBlurInput}
            onChange={handleChangeInput}
            value={input}
          />
        </S.Field>
      </S.TodoInputBox>
      {!isFocus && (
        <S.TodoInputKbdWrapper>
          <S.TodoInputKbd>
            <span>⌘</span>
          </S.TodoInputKbd>
          <S.TodoInputKbd>
            <span>K</span>
          </S.TodoInputKbd>
        </S.TodoInputKbdWrapper>
      )}
    </S.TodoInputWrapper>
  );
};

export default TodoInputBox;
