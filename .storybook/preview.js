import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
export const decorators = [defaultDecorator];
