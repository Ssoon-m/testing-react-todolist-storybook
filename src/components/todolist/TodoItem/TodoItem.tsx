import React, { useState } from 'react';
import CheckBox from '@/components/common/CheckBox';
import * as S from './TodoItem.style';
import MoreButtonMenu from '@/components/common/MoreButtonMenu';
interface Props {
  id: string;
  label: string;
  isChecked: boolean;
}

const TodoItem = ({ id, label, isChecked }: Props) => {
  const [checked, setChecked] = useState(isChecked);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <S.TodoItemWrapper>
      <CheckBox
        id={id}
        checked={checked}
        label={label}
        onChange={handleChecked}
      />
      <MoreButtonMenu todoItemId={id} />
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
