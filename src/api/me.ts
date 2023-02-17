import client from './client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { me } from './queryKeys';

// interface IUser {
//   username: string;
//   password: string;
// }

const getMe = async () => {
  return await client
    .get('auth/me', { withCredentials: true })
    .then((res) => res.data);
};

const useGetMe = () => {
  useQuery(me.all, getMe);
};

export { getMe, useGetMe };
