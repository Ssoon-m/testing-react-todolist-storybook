const todo = {
  all: ['todo'] as const,
  list: () => [...todo.all, 'list'] as const,
};

export { todo };
