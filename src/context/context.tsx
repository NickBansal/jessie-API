import { createContext, useEffect, useState } from 'react';

import { windowsHash } from '../utils/window-hash';

interface ContextType {

  token: string,
  toggleSignIn: () => void,
  results: any[],
  setResults: React.Dispatch<React.SetStateAction<any[]>>,
  searchType: string,
  setSearchTypes: React.Dispatch<React.SetStateAction<string>>,
  error: boolean,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext< ContextType >({
  token: '',
  toggleSignIn: () => {},
  results: [],
  setResults: () => {},
  searchType: '',
  setSearchTypes: () => {},
  error: false,
  setError: () => {},
  loading: false,
  setLoading: () => {}
});

export const ContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [token, setToken] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [searchType, setSearchTypes] = useState<any>('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hashToken = windowsHash();
    setToken(hashToken ?? '{}');
  }, []);

  const toggleSignIn = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  const value = {
    token,
    toggleSignIn,
    results,
    setResults,
    searchType,
    setSearchTypes,
    error,
    setError,
    loading,
    setLoading
  }

  return <Context.Provider value={ value }>{children}</Context.Provider>;
};
