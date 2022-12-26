import React, { useEffect, useRef, useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import * as S from './TodoItem.style';
import MoreButtonMenu from '@/components/common/MoreButtonMenu';
import { useDeleteTodo } from '@/api/todo';
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
  const { mutate: patchTodo } = usePatchTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
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
    patchTodo({ id, todo: input });
  };

  return (
    <S.TodoItemWrapper data-testid="todo-item">
      {!isTargetEdit ? (
        <CheckBox
          id={id}
          checked={checked}
          label={label}
          onChange={handleChecked}
        />
      ) : (
        <S.TodoInputWrapper>
          <CheckBox id={id} checked={checked} readOnly />
          <S.TodoInput
            type="text"
            ref={inputRef}
            value={input}
            onChange={handleChangeInput}
            onBlur={handleEditComplete}
          />
        </S.TodoInputWrapper>
      )}
      <MoreButtonMenu
        onClickEdit={handleEdit}
        onClickDelete={() => deleteTodo({ id })}
      />
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
