import React, { useState } from 'react';
import ThreeDotsButton from '../ThreeDotsButton';
import useOutsideClick from '@/hooks/useOutsideClick';
import * as S from './MoreButtonMenu.style';

const MoreButtonMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  useOutsideClick({ triggerEvent: () => showMenu && setShowMenu(false) });
  return (
    <S.Container>
      <ThreeDotsButton
        onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
      />
      {showMenu && (
        <S.Menu>
          <S.MenuItem>Edit</S.MenuItem>
          <S.MenuItem>Delete Task</S.MenuItem>
        </S.Menu>
      )}
    </S.Container>
  );
};

export default MoreButtonMenu;
