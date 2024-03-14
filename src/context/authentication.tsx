import { createContext, useEffect, useState } from 'react';

import { windowsHash } from '../utils/window-hash';

export const AuthContext = createContext({ token: '', toggleSignIn: () => {} });

export const AuthContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hashToken = windowsHash();
    setToken(hashToken ?? '{}');
  }, []);

  const toggleSignIn = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={{ token, toggleSignIn }}>{children}</AuthContext.Provider>;
};
