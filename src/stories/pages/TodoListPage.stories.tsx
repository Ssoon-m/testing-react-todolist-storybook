import React from 'react';
// storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';
// component
import TodoListPage from '@/pages/TodoListPage';
// layout
import MainLayout from '@/layout/MainLayout';
// msw
import * as Todo from '@/mocks/todo/todo';
// testing
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/TodoListPage',
  component: TodoListPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [(Story, _context) => <Story />],
  parameters: {
    msw: {
      handlers: [...Object.values(Todo)],
    },
  },
} as ComponentMeta<typeof TodoListPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof TodoListPage> = () => (
  <TodoListPage />
);

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => {
    expect(canvas.getAllByTestId('todo-item')).toHaveLength(7);
  });
};
