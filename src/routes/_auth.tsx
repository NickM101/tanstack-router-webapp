import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useAuth } from '../lib/auth';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
});

function AuthLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isVerified) {
      navigate({ to: '/dashboard' });
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}