const todo = {
  all: ['todo'] as const,
  list: () => [...todo.all, 'list'] as const,
};

const me = {
  all: ['me'] as const,
};

export { todo, me };
