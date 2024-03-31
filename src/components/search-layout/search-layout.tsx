/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ChangeEvent, useContext, useState } from 'react';
import axios from 'axios';

import { Spinner } from '../../components/spinner/spinner';
import { Context } from '../../context/context';
import AlbumLayout from '../each-search-type/albums';
import ArtistLayout from "../each-search-type/artists";
import AudiobookLayout from '../each-search-type/audiobooks';
import ShowLayout from '../each-search-type/shows';
import TrackLayout from '../each-search-type/tracks';
import SearchTypeDropdown from '../search-type/search-type';

/* import { type SearchTypes } from '../../types/search-types'; */
import './search-layout.css';

export interface Common {
  name: string;
  id: number;
  popularity?: number;
  artists?: Array<{
    name: string;
  }>;
}

function SearchLayout() {
  const { token } = useContext(Context);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const [searchType, setSearchTypes] = useState<any>('');

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setResults([]);
    setInput('');
    setSearchTypes(e.target.value);
  }

  const searchParams = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // const form = event.currentTarget;
    // const formElements = form.elements as typeof form.elements & {
    //   'spotify-search-input': HTMLInputElement;
    // };
    try {
      const { data } = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: input,
          type: searchType.slice(0, -1)
        }
      });

      setTimeout(() => {
        setResults(data?.[searchType].items || []);
        setLoading(false);
      }, 300);
    } catch (error) {
      if (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
  }

  const inputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  console.log(results, searchType, ' <<<<<<<');

  return (
    <div className="App">
      <section className="App-section">
        {token
        ? <>
          <SearchTypeDropdown handleTypeChange={handleTypeChange} />
          <div>
            <form onSubmit={searchParams}>
              <i className="fa-sharp fa-solid fa-magnifying-glass fa-2xl" />
              <input type="text" id="spotify-search-input" disabled={loading} onChange={inputText} value={input} />
            </form>
          </div>
        </>
         : <p className='warning-message'>Please login to use the search app</p>}

        {loading && !error && <Spinner />}

        {error && <p>sorry, there is an error</p> }

        {results &&
         <div className='result-box'>
          <ul className='results'>
          {searchType === "artists" && <ArtistLayout results={results} />}
          {searchType === 'albums' && <AlbumLayout results={results} />}
          {searchType === 'tracks' && <TrackLayout results={results} />}
          {searchType === 'audiobooks' && <AudiobookLayout results={results} />}
          {searchType === 'shows' && <ShowLayout results={results} />}
        </ul>
       </div>
       }

      </section>
    </div>
        )
};

export default SearchLayout;
