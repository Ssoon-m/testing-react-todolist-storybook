import styled from '@emotion/styled';

export const TodoItemWrapper = styled.div`
  width: 100%;
  padding: 0.6rem;
  color: #212121;
  background-color: #ffffff;
  font-size: 1.4rem;
  border-radius: 0.6rem;
  &:not(&:last-of-type) {
    margin-bottom: 5px;
  }
`;
