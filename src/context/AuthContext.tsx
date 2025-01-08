import { useState } from 'react';
import { User } from '../types/auth';
import { AuthContext } from '../lib/auth';


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, pin: string) => {
    if (email && pin.length === 6) {
      setUser({ email, isVerified: false });
      return true;
    }
    return false;
  };

  const verifyOTP = async (otp: string) => {
    if (user && otp === '123456') {
      setUser({ ...user, isVerified: true });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, verifyOTP, logout }}>
      {children}
    </AuthContext.Provider>
  );
};