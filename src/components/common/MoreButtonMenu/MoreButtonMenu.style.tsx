import styled from '@emotion/styled';

export const Container = styled.div`
  display: relative;
`;

export const Menu = styled.ul`
  position: absolute;
  padding: 1rem;
  border: 1px solid #cccccc;
  border-radius: 1.2rem;
  min-width: 120px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;
export const MenuItem = styled.li`
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
  &:not(&:last-of-type) {
    padding-bottom: 0.8rem;
  }
`;
