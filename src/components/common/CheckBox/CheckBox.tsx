import React from 'react';
import * as S from './CheckBox.styled';

interface Props {
  id?: string;
  type?: 'checkbox' | 'radio';
  checked: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox = ({
  id,
  type = 'checkbox',
  checked,
  label,
  onChange,
}: Props) => (
  <S.CheckBoxLabel checked={checked}>
    <S.CheckBoxWrapper>
      <S.CheckBox checked={checked}>
        <S.CheckBoxHiddenInput
          type={type}
          onChange={onChange}
          checked={checked}
        />
        <S.CheckBoxStyle checked={checked}>
          <S.Icon viewBox="0 0 24 24">
            <polyline points="19 7 10 17 5 12" />
          </S.Icon>
        </S.CheckBoxStyle>
      </S.CheckBox>
    </S.CheckBoxWrapper>
    {label}
  </S.CheckBoxLabel>
);

export default CheckBox;
