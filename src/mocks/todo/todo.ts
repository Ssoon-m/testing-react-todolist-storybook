import { rest } from 'msw';
import { TodoListMock } from './todoMock';

const getTodoList = rest.get(/\/todo\/list$/, (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(0), ctx.json(TodoListMock));
});

const postTodo = rest.post(/\/todo$/, async (req, res, ctx) => {
  const { todo } = await req.json();
  if (!todo) return res(ctx.status(400));

  TodoListMock.unshift({
    id: Math.random().toString(36),
    isChecked: false,
    todo,
  });
  return res(ctx.status(201));
});

export { getTodoList, postTodo };
