import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';
import { Toaster } from 'sonner';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      {children}
    </QueryClientProvider>
  );
};
