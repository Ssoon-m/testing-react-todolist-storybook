import styled from '@emotion/styled';

export const CheckBoxLabel = styled.label<{ checked: boolean }>`
  display: inline-flex;
  text-decoration-line: ${({ checked }) => (checked ? 'line-through' : 'none')};
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
`;

export const CheckBoxWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 2rem;
  height: 2rem;
`;

export const CheckBox = styled.label<{ checked: boolean }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
  transition: background-color 0.25s ease-in-out;
  background-color: ${({ checked }) => (checked ? 'black' : '#e9ebee')};
  cursor: pointer;
`;

export const CheckBoxHiddenInput = styled.input`
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckBoxStyle = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
`;

export const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
`;
