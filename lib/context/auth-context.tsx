"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type User = {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phone: string;
  zip: string;
  prefecture: string;
  city: string;
  building?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (userData: Omit<User, 'id'> & { password: string }) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'welabo_auth';
const USERS_STORAGE_KEY = 'welabo_users';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from local storage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedAuth) {
        try {
          setUser(JSON.parse(storedAuth));
        } catch (e) {
          console.error('Failed to parse auth data', e);
        }
      }
    }
  }, []);

  const register = (userData: Omit<User, 'id'> & { password: string }): boolean => {
    try {
      // Get existing users
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if email already exists
      if (users.some((u: any) => u.email === userData.email)) {
        return false; // Email already registered
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        lastName: userData.lastName,
        firstName: userData.firstName,
        lastNameKana: userData.lastNameKana,
        firstNameKana: userData.firstNameKana,
        phone: userData.phone,
        zip: userData.zip,
        prefecture: userData.prefecture,
        city: userData.city,
        building: userData.building,
      };

      // Save user with password
      const userWithPassword = {
        ...newUser,
        password: userData.password, // In production, this should be hashed
      };

      users.push(userWithPassword);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

      // Auto login after registration
      setUser(newUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));

      return true;
    } catch (e) {
      console.error('Registration failed', e);
      return false;
    }
  };

  const login = (email: string, password: string): boolean => {
    try {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (!storedUsers) {
        return false;
      }

      const users = JSON.parse(storedUsers);
      const foundUser = users.find((u: any) => u.email === email && u.password === password);

      if (foundUser) {
        // Remove password before storing
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
        return true;
      }

      return false;
    } catch (e) {
      console.error('Login failed', e);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
















