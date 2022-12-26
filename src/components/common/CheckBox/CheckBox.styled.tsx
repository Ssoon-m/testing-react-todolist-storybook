import styled from '@emotion/styled';
import { css } from '@emotion/react';
export const CheckBoxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
`;

export const CheckBoxLabelText = styled.div<{ checked: boolean }>`
  position: relative;
  &:after {
    position: absolute;
    content: '';
    width: 0%;
    height: 0.2rem;
    left: 0;
    top: calc(50% - 0.2rem / 2);
    background-color: #000000;
    transition: width 0.25s ease-in-out;
    pointer-events: none;
  }
  ${({ checked }) =>
    checked &&
    css`
      &:after {
        width: 100%;
      }
    `}
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
