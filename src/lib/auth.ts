import { createContext, useContext } from 'react';
import { useNavigate } from '@tanstack/react-router';

import { AuthContextType } from '../types/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const useRequireAuth = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate({ to: '/login' });
    return null;
  }

  return user;
};

export const useRequireVerified = () => {
    const user = useRequireAuth();
    const navigate = useNavigate();
  
    if (user && !user.isVerified) {
      navigate({ to: '/verify' });
      return null;
    }
  
    return user;
  };
