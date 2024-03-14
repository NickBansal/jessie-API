import { type SetStateAction, useEffect, useState } from 'react';

import { Header } from '../components/header/header';
import { windowsHash } from '../utils/window-hash';

import './app.css';

function App() {
  const [token, setToken] = useState<SetStateAction<string | null>>('');

  useEffect(() => {
    const hashToken = windowsHash();
    setToken(hashToken);
  }, []);

  return (
    <div className="App">
      <Header />

      <section className="App-section">
        {Boolean(token) && <input id="spotify-search-input" />}
      </section>
    </div>
  );
}

export default App;
