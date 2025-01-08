export interface User {
  email: string;
  isVerified: boolean;
}

export interface AuthContextType {
  isAuthenticated: boolean
  user: User | null;
  login: (email: string, pin: string) => Promise<boolean>;
  verifyOTP: (otp: string) => Promise<boolean>;
  logout: () => void;
}
