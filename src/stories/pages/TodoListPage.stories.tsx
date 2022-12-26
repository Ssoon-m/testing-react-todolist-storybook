import React from 'react';
// storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';
// component
import TodoListPage from '@/pages/TodoListPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/user/TodoListPage',
  component: TodoListPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof TodoListPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TodoListPage> = () => (
  <TodoListPage />
);
