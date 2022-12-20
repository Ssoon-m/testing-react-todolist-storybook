import client from './client';

const getTodoList = async () => {
  return await client
    .get('/todolist')
    .then((res) => res.data)
    .catch((e) => Promise.reject(new Error(e)));
};

export { getTodoList };
