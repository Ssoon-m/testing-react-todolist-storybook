import React, { useEffect, useRef, useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import * as S from './TodoInputBox.style';

const TodoInputBox = () => {
  const [input, setInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const keyDownRef = useRef<{ [key: string]: boolean }>({});
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyup);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    keyDownRef.current[event.key] = true;
    if (keyDownRef.current['Meta'] && event.key === 'k') handleFocusInput();
  };

  const handleKeyup = (event: KeyboardEvent) => {
    delete keyDownRef.current[event.key];
  };

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const handleFocusInput = () => {
    inputRef.current?.focus();
    setIsFocus(true);
  };

  const handleBlurInput = () => {
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
