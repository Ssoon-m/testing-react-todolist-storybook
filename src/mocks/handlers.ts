import * as todo from './todo/todo';

const objMerge = { ...todo };
export const handlers = [...Object.values(objMerge)];
