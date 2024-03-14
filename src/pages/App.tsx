/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState } from 'react';
import axios from 'axios';

import { Header } from '../components/header/header';
import { AuthContext } from '../context/authentication';

import './app.css';

function App() {
  const { token } = useContext(AuthContext);
  const [artists, setArtists] = useState([]);

  const searchArtists = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      'spotify-search-input': HTMLInputElement;
    };

    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: formElements['spotify-search-input'].value,
        type: 'artist'
      }
    });

    setArtists(data?.artists?.items);
  };

  console.log(artists, ' <<<<<<');

  return (
    <div className="App">
      <Header />

      <section className="App-section">
        {Boolean(token) && (
          <form onSubmit={searchArtists}>
            <input type="text" id="spotify-search-input" />
          </form>
        )}
      </section>
    </div>
  );
}

export default App;
