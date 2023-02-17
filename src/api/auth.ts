import client from './client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IUser {
  username: string;
  password: string;
}

interface IToken {
  access_token: string;
  refresh_token: string;
}

const postUserLogin = async (user: IUser) => {
  return await client
    .post<IToken>('/auth/login', user, { withCredentials: true })
    .then((res) => res.data);
};

const usePostUserLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(postUserLogin, {
    onSuccess: (token) => {
      console.log('token', token);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

const postRefreshToken = async (refresh?: string) => {
  return await client
    .post('/auth/refresh', { refresh }, { withCredentials: true })
    .then((res) => res.data);
};

export { postUserLogin, usePostUserLogin, postRefreshToken };
