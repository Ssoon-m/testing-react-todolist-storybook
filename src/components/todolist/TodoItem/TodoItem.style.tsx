import styled from '@emotion/styled';

export const TodoItemWrapper = styled.div`
  width: 100%;
  padding: 0.7rem 1.2rem;
  color: #212121;
  background-color: #ffffff;
  font-size: 1.6rem;
  border-radius: 0.6rem;
  display: flex;
  align-item: center;
  justify-content: space-between;
  &:first-of-type {
    border-radius: 1.4rem 1.4rem 0.6rem 0.6rem;
  }
  &:last-of-type {
    border-radius: 0.6rem 0.6rem 1.4rem 1.4rem;
  }
  &:not(&:last-of-type) {
    margin-bottom: 5px;
  }
`;
