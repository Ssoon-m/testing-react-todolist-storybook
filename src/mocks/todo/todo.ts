import { rest } from 'msw';
import { TodoListMock } from './todoMock';

const getUserList = rest.get(/\/todo\/list$/, (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(1500), ctx.json(TodoListMock));
});

export { getUserList };
