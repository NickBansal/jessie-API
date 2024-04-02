import { createContext, useEffect, useState } from 'react';

import { windowsHash } from '../utils/window-hash';

export const Context = createContext({ token: '', toggleSignIn: () => {} });

export const ContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hashToken = windowsHash();
    setToken(hashToken ?? '{}');
  }, []);

  const toggleSignIn = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return <Context.Provider value={{ token, toggleSignIn }}>{children}</Context.Provider>;
};

export const AppContext = createContext<{ results: any[], setResults: React.Dispatch<React.SetStateAction<any[]>> }>({ results: [], setResults: () => {} });

export const AppContextProvider = ({ children, results, setResults }: { setResults: any, results: any, children: React.ReactElement }) => {
  // const [results, setResults] = useState<any[]>([]);

  const value = {
    results,
    setResults
  }

   return <AppContext.Provider value={value} > {children} </AppContext.Provider>
}
