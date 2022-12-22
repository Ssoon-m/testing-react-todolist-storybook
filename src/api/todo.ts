import client from './client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '@/types/todo';
import { todo } from './queryKeys';
import { AxiosError } from 'axios';

const getTodoList = async () => {
  return await client
    .get('/todo/list')
    .then((res) => res.data)
    .catch((e) => Promise.reject(new Error(e)));
};

const useGetTodoList = () => {
  return useQuery<ITodo[], AxiosError>(todo.list(), () => getTodoList());
};

const postTodo = async ({ todo }: Pick<ITodo, 'todo'>) => {
  return await client
    .post('/todo', {
      todo,
    })
    .then((res) => res.data)
    .catch((e) => Promise.reject(new Error(e)));
};

const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todo.list());
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

const deleteTodo = async ({ id }: Pick<ITodo, 'id'>) => {
  return await client
    .delete('/todo', {
      data: {
        id,
      },
    })
    .then((res) => res.data)
    .catch((e) => Promise.reject(new Error(e)));
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todo.list());
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export { useGetTodoList, usePostTodo, useDeleteTodo };
