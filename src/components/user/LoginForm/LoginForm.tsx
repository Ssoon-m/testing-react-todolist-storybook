import React, { useCallback, useState } from 'react';
import * as S from './LoginForm.style';
import { usePostUserLogin } from '@/api/auth';

const LoginForm = () => {
  const { mutate } = usePostUserLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.currentTarget.value);
    setUsername(e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = () => {
    console.log('password');
    mutate({ username, password });
  };

  return (
    <S.LoginFormContainer>
      <S.LoginFormWrapper>
        <S.LoginFormHeader>투두리스트 로그인</S.LoginFormHeader>
        <S.LoginFormInput
          type="text"
          placeholder="Username"
          onChange={handleChangeUserName}
        />
        <S.LoginFormInput
          type="text"
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <S.LoginFormSubmitButton onClick={handleLogin}>
          로그인
        </S.LoginFormSubmitButton>
      </S.LoginFormWrapper>
    </S.LoginFormContainer>
  );
};

export default LoginForm;
