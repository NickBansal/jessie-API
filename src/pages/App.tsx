import { type SetStateAction, useEffect, useState } from 'react';

import { ButtonLink } from '../components/buttons/buttons';
import { Header } from '../components/header/header';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../constants/spotify';
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
        {!token && (
          <ButtonLink
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            btnText="Login to Spotify"
          />
        )}
      </section>
    </div>
  );
}

export default App;
