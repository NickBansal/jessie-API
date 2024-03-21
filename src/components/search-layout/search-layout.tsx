/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState } from 'react';
import axios from 'axios';

import { Spinner } from '../../components/spinner/spinner';
import { Context } from '../../context/context';

/* import { type SearchTypes } from '../../types/search-types'; */
import './search-layout.css';

interface Common {
  name: string;
  id: number;
  popularity?: number;
  artists?: Array<{
    name: string;
  }>;
}

interface ArtistsResult extends Common {
  images: Array<{
    url: string
  }>;
}

interface TrackResult extends Common {
  album: {
    images: Array<{
      url: string;
    }>;
  };
  artists: Array<{
    name: string;
  }>;
}

interface AlbumResult extends Common {
  images: Array<{
    url: string
  }>;
  artists: Array<{
    name: string;
  }>;
}

interface AudiobooksResult extends Common {
  authors: Array<{
    name: string;
  }
  >;
  total_chapters: number;
  images: Array<{
    url: string
  }>;

}

interface ShowsResult extends Common {
  total_episodes: number;
  images: Array<{
    url: string
  }>;

  media_type: string;

}

function SearchLayout({ searchType }: { searchType: string }) {
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

  console.log(results, searchType, ' <<<<<<<');

  return (
    <div className="App">
      <section className="App-section">
        {token ? (
          <div>
            <form onSubmit={searchParams}>
              <i className="fa-sharp fa-solid fa-magnifying-glass fa-2xl" />
              <input type="text" id="spotify-search-input" disabled={loading} />
            </form>

          </div>
        ) : <p className='warning-message'>Please login to use the search app</p>}
        {loading && <Spinner />}

        {/* Create components for the results */}

        { results
        ? <div className='result-box'>
          <ul className='results'>
          {searchType === "artists" ? results.map((result: ArtistsResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Popularity: {result.popularity}</h4>
                </div>
            </li>
            </>)
          })
          : searchType === 'albums' ? results.map((result: AlbumResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Artist: {result.artists[0].name}</h4>
                </div>
            </li>
            </>)
          }) : searchType === 'tracks' ? results.map((result: TrackResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.album.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Artist: {result.artists[0].name}</h4>
                  <h4>Popularity: {result.popularity}</h4>
                </div>
            </li>
            </>)
          }) : searchType === 'audiobooks' ? results.map((result: AudiobooksResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Author: {result.authors[0].name}</h4>
                  <h4>Total Chapters: {result.total_chapters}</h4>
                </div>
            </li>
            </>)
          }) : searchType === 'shows' ? results.map((result: ShowsResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Media Type: {result.media_type}</h4>
                  <h4>Total Episodes: {result.total_episodes}</h4>
                </div>
            </li>
            </>)
          }) : <p>No results</p> }
          </ul>
        </div> : <p>No results</p>}

      </section>
    </div>
  );
}

export default SearchLayout;
