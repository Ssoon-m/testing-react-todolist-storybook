import * as todoList from './todolist/todolist';

const objMerge = { ...todoList };
export const handlers = [...Object.values(objMerge)];
