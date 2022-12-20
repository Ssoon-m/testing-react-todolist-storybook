import styled from '@emotion/styled';

export const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;

export const CheckBoxLabel = styled.label<{ checked: boolean }>`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  transition: all 0.25s ease-in-out;
  background-color: ${({ checked }) => (checked ? 'black' : '#e9ebee')};
  cursor: pointer;
`;

export const CheckBoxText = styled.label`
  display: inline-block;
  padding-left: 10px;
  position: absolute;
  cursor: pointer;
`;

export const CheckBoxHiddenInput = styled.input`
  border: 0;
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
