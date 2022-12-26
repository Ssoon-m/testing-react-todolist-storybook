import React from 'react';
// storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';
// component
import TodoListPage from '@/pages/TodoListPage';

// msw
import * as Todo from '@/mocks/todo/todo';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/TodoListPage',
  component: TodoListPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    msw: {
      handlers: [...Object.values(Todo)],
    },
  },
} as ComponentMeta<typeof TodoListPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TodoListPage> = () => (
  <TodoListPage />
);
