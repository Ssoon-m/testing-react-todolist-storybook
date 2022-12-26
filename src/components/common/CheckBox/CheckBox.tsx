import React from 'react';
import * as S from './CheckBox.styled';

interface Props {
  id?: string;
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  label?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox = ({
  id,
  type = 'checkbox',
  checked = false,
  label,
  readOnly = false,
  onChange,
}: Props) => (
  <S.CheckBoxLabel>
    <S.CheckBoxWrapper>
      <S.CheckBox checked={checked}>
        <S.CheckBoxHiddenInput
          type={type}
          onChange={onChange}
          checked={checked}
          readOnly={readOnly}
        />
        <S.CheckBoxStyle checked={checked}>
          <S.Icon viewBox="0 0 24 24">
            <polyline points="19 7 10 17 5 12" />
          </S.Icon>
        </S.CheckBoxStyle>
      </S.CheckBox>
    </S.CheckBoxWrapper>
    <S.CheckBoxLabelText checked={checked}>{label}</S.CheckBoxLabelText>
  </S.CheckBoxLabel>
);

export default CheckBox;
