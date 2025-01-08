import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { AuthProvider } from '../context/AuthContext';
import { AuthContextType } from '../types/auth';

interface MyRouterContext {
  auth: AuthContextType
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <AuthProvider>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </AuthProvider>
  ),
});