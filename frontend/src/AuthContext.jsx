import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => localStorage.getItem('authToken'));

  const login = (token) => {
    setAuth(token);
    localStorage.setItem('authToken', token); // Save token
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
