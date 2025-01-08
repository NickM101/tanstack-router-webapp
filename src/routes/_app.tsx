import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useAuth, useRequireVerified } from '../lib/auth';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  const { logout } = useAuth();
  const user = useRequireVerified();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-semibold">Welcome, {user.email}</span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}