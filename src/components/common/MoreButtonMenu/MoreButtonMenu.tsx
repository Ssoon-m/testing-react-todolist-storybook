import React, { useState } from 'react';
import ThreeDotsButton from '../ThreeDotsButton';
import { ReactComponent as TrashCan } from '@/assets/svg/trash-can.svg';
import { ReactComponent as Edit } from '@/assets/svg/edit.svg';
import { useDeleteTodo } from '@/api/todo';
import * as S from './MoreButtonMenu.style';

interface Props {
  todoItemId: string;
  onClickEdit: () => void;
}

const MoreButtonMenu = ({ todoItemId, onClickEdit }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { mutate } = useDeleteTodo();

  const handleEdit = () => {
    onClickEdit();
    setShowMenu(false);
  };

  const handleDelete = () => {
    mutate({ id: todoItemId });
  };

  return (
    <S.Container>
      <ThreeDotsButton
        onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
      />
      {showMenu && (
        <>
          <S.Menu>
            <S.MenuItem onClick={handleEdit}>
              <Edit width={20} height={20} />
              Edit
            </S.MenuItem>
            <S.MenuItem onClick={handleDelete}>
              <TrashCan width={20} height={20} />
              Delete Task
            </S.MenuItem>
          </S.Menu>
          <S.OverLay onClick={() => setShowMenu(false)} />
        </>
      )}
    </S.Container>
  );
};

export default MoreButtonMenu;
