import { rest } from 'msw';

const getUserList = rest.get(/\/todolist$/, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ todolist: 'todo~~' }));
});

export { getUserList };
