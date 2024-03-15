import { useContext } from 'react';

import { Context } from '../../context/context';
import { Login, Logout } from '../buttons/buttons';

import './header.css';

export const Header = () => {
  const { token, toggleSignIn } = useContext(Context);

  return (
    <header>
      <h1>Music search generator</h1>
      {token ? <Logout handleClick={toggleSignIn} /> : <Login />}
    </header>
  );
};
