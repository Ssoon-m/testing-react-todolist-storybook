import styled from '@emotion/styled';

export const LoginFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginFormWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transform: translateY(-50%);
`;

export const LoginFormHeader = styled.h1`
  font-size: 1.8rem;
`;

export const LoginFormInput = styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 1.2rem;
  background-color: #ffffff;
`;

export const LoginFormSubmitButton = styled.button`
  color: #ffffff;
  width: 70%;
  padding: 0.7rem;
  background-color: black;
`;

// export const LoginFormWrapper = styled.div`
//   width: 100%;
//   max-width: 520px;
// `;
