import React from 'react';
import * as S from './LoginForm.style';

const LoginForm = () => {
  return (
    <S.LoginFormContainer>
      <S.LoginFormWrapper>
        <S.LoginFormHeader>투두리스트 로그인</S.LoginFormHeader>
        <S.LoginFormInput type="text" placeholder="Username" />
        <S.LoginFormInput type="text" placeholder="Password" />
        <S.LoginFormSubmitButton>로그인</S.LoginFormSubmitButton>
      </S.LoginFormWrapper>
    </S.LoginFormContainer>
  );
};

export default LoginForm;
