import client from './client';
import { useQuery } from '@tanstack/react-query';
import { ITodo } from '@/types/todo';
import { todo } from './queryKeys';
import { AxiosError } from 'axios';

const getTodoList = async () => {
  return await client
    .get('/todo/list')
    .then((res) => res.data)
    .catch((e) => {
      Promise.reject(new Error(e));
    });
};

const useGetTodoList = () => {
  return useQuery<ITodo[], AxiosError>(todo.list(), () => getTodoList());
};

export { useGetTodoList };
