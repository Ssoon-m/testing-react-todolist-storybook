import React, { useEffect, useRef, useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import * as S from './TodoItem.style';
import MoreButtonMenu from '@/components/common/MoreButtonMenu';
import { usePatchTodo } from '@/api/todo';
interface Props {
  id: string;
  label: string;
  isChecked: boolean;
}

const TodoItem = ({ id, label, isChecked }: Props) => {
  const [checked, setChecked] = useState(isChecked);
  const [isTargetEdit, setIsTargetEdit] = useState(false);
  const [input, setInput] = useState(label);
  const { mutate } = usePatchTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isTargetEdit]);

  const handleEdit = () => {
    setIsTargetEdit(true);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleEditComplete = () => {
    setIsTargetEdit(false);
    mutate({ id, todo: input });
  };

  return (
    <S.TodoItemWrapper>
      {!isTargetEdit ? (
        <CheckBox
          id={id}
          checked={checked}
          label={label}
          onChange={handleChecked}
        />
      ) : (
        <S.TodoInputWrapper>
          <CheckBox id={id} />
          <S.TodoInput
            type="text"
            value={input}
            ref={inputRef}
            onChange={handleChangeInput}
            onBlur={handleEditComplete}
          />
        </S.TodoInputWrapper>
      )}
      <MoreButtonMenu todoItemId={id} onClickEdit={handleEdit} />
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
