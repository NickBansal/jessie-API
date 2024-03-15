/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState } from 'react';
import axios from 'axios';

import { Spinner } from '../../components/spinner/spinner';
import { Context } from '../../context/context';
import { type SearchTypes } from '../../types/search-types';

import './search-layout.css';

function SearchLayout({ searchType }: SearchTypes) {
  const { token } = useContext(Context);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchParams = async (event: React.FormEvent<HTMLFormElement>) => {
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
        type: searchType.slice(0, -1)
      }
    });

    setTimeout(() => {
      setResults(data?.[searchType].items || []);
      formElements['spotify-search-input'].value = '';
      setLoading(false);
    }, 300);
  };

  console.log(results, ' <<<<<<<');

  return (
    <div className="App">
      <section className="App-section">
        {token ? (
          <form onSubmit={searchParams}>
            <i className="fa-sharp fa-solid fa-magnifying-glass fa-2xl" />
            <input type="text" id="spotify-search-input" disabled={loading} />
          </form>
        ) : <p>Please login to use the search app</p>}
        {loading && <Spinner />}
      </section>
    </div>
  );
}

export default SearchLayout;
