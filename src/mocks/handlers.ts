import * as todoList from './todo/todo';

const objMerge = { ...todoList };
export const handlers = [...Object.values(objMerge)];
