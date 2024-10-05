import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      {children}
    </AppRouterCacheProvider>
  );
}
