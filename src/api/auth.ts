import client from './client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IUser {
  username: string;
  password: string;
}

const postUserLogin = async (user: IUser) => {
  return await client
    .post('/auth/login', user)
    .then((res) => res.data)
    .catch((e) => Promise.reject(new Error(e)));
};

const usePostUserLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(postUserLogin, {
    onSuccess: () => {
      console.log('success');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export { postUserLogin, usePostUserLogin };
