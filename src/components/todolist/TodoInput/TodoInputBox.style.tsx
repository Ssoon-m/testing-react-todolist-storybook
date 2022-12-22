import styled from '@emotion/styled';

export const TodoInputWrapper = styled.div<{ isFocus: boolean }>`
  width: 100%;
  padding: 1.2rem;
  border-radius: 1.4rem;
  background-color: ${({ isFocus }) => (isFocus ? '#ffffff' : '#eaebee')};
  font-size: 1.4rem;
  display: flex;
  transition: all 0.5s ease;
  align-item: center;
  overflow: hidden;
`;

export const TodoInputBox = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
`;

export const Field = styled.div`
  width: 100%;
  position: relative;
`;

export const PlaceHolder = styled.label<{ isFocus: boolean }>`
  position: absolute;
  pointer-events: none;
  left: 0px;
  height: 2rem;
  /* top: ${({ isFocus }) => (isFocus ? '2px' : '0px')}; */
  color: #bcbec1;
  font-size: 1.6rem;
`;

export const TodoInput = styled.input`
  width: 100%;
  height: 100%;
`;

export const TodoInputKbdWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const TodoInputKbd = styled.kbd`
  position: relative;
  background-color: #dbdedf;
  display: inline-block;
  border-radius: 0.3rem;
  height: 100%;
  min-width: 1.8rem;
  text-align: center;
  vertical-align: middle;
  padding: 0.2rem 0.5rem;
  color: #a2a6a9;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  & > span {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
`;
