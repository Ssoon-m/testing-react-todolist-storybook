import { ITodo } from '@/types/todo';

export let TodoListMock: ITodo[] = [
  {
    id: Math.random().toString(36),
    todo: 'Make the logo bigger',
    isChecked: false,
  },
  {
    id: Math.random().toString(36),
    todo: 'Launch the Beta version',
    isChecked: false,
  },
  {
    id: Math.random().toString(36),
    todo: 'Share on Twitter',
    isChecked: false,
  },
  {
    id: Math.random().toString(36),
    todo: 'Make the Toast Component',
    isChecked: false,
  },
  {
    id: Math.random().toString(36),
    todo: 'Drag & Drop feature',
    isChecked: false,
  },
  {
    id: Math.random().toString(36),
    todo: 'Jest study',
    isChecked: false,
  },
  {
    id: Math.random().toString(36),
    todo: 'React18 suspense & error-boundary stury',
    isChecked: false,
  },
];

export const setTodoListMock = (data: ITodo[]) => {
  TodoListMock = data;
};
