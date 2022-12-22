import React, { useState } from 'react';
import ThreeDotsButton from '../ThreeDotsButton';
import { ReactComponent as TrashCan } from '@/assets/svg/trash-can.svg';
import { ReactComponent as Edit } from '@/assets/svg/edit.svg';
import * as S from './MoreButtonMenu.style';

const MoreButtonMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <S.Container>
      <ThreeDotsButton
        onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
      />
      {showMenu && (
        <>
          <S.Menu>
            <S.MenuItem>
              <Edit width={20} height={20} />
              Edit
            </S.MenuItem>
            <S.MenuItem>
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
