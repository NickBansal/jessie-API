import { useContext } from 'react';

import { AuthContext } from '../../context/authentication';
import { Login, Logout } from '../buttons/buttons';

import './header.css';

export const Header = () => {
  const { token, toggleSignIn } = useContext(AuthContext);

  return (
    <header>
      <h1>Music search generator</h1>
      {token ? <Logout handleClick={toggleSignIn} /> : <Login />}
    </header>
  );
};
