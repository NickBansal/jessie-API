/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState } from 'react';
import axios from 'axios';

import { Header } from '../components/header/header';
import { Spinner } from '../components/spinner/spinner';
import { AuthContext } from '../context/authentication';

import './app.css';

function App() {
  const { token } = useContext(AuthContext);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchArtists = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
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
    formElements['spotify-search-input'].value = '';

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  console.log(artists, ' <<<<<<<');

  return (
    <div className="App">
      <Header />

      <section className="App-section">
        {Boolean(token) && (
          <form onSubmit={searchArtists}>
            <i className="fa-sharp fa-solid fa-magnifying-glass fa-2xl" />
            <input type="text" id="spotify-search-input" disabled={loading} />
          </form>
        )}
        {loading && <Spinner />}
      </section>
    </div>
  );
}

export default App;
