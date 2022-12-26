import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
const queryClient = new QueryClient();

// Initialize MSW
initialize();

// global styles
import '@/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const defaultDecorator = (Story, context) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story {...context} />
    </QueryClientProvider>
  );
};
export const decorators = [defaultDecorator, mswDecorator];
