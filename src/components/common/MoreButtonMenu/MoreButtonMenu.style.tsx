import styled from '@emotion/styled';

export const Container = styled.div`
  display: relative;
`;

export const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const Menu = styled.ul`
  position: absolute;
  padding: 0.4rem;
  border: 1px solid #cccccc;
  border-radius: 1.2rem;
  min-width: 170px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 20;
`;
export const MenuItem = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  &:hover {
    border-radius: 0.8rem;
    background-color: #edecf1;
  }
`;
