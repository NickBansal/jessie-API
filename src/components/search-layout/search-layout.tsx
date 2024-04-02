/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext } from 'react';

import { Spinner } from '../../components/spinner/spinner';
import { Context } from '../../context/context';
import AlbumLayout from '../each-search-type/albums';
import ArtistLayout from "../each-search-type/artists";
import AudiobookLayout from '../each-search-type/audiobooks';
import ShowLayout from '../each-search-type/shows';
import TrackLayout from '../each-search-type/tracks';
import InputAndAPI from '../input/input';
import SearchTypeDropdown from '../search-type/search-type';

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
  const { token, error, results, searchType, loading } = useContext(Context);

  return (

      <div className="App">
        <section className="App-section">
          {token
          ? <>
              <SearchTypeDropdown />
              <InputAndAPI />
            </>
          : <p className='warning-message'>Please login to use the search app</p>}

          {loading && !error && <Spinner />}

          {error && <p>sorry, there is an error</p> }

          {results &&
          <div className='result-box'>
            <ul className='results'>
                {searchType === "artists" && <ArtistLayout />}
                {searchType === 'albums' && <AlbumLayout />}
                {searchType === 'tracks' && <TrackLayout />}
                {searchType === 'audiobooks' && <AudiobookLayout />}
                {searchType === 'shows' && <ShowLayout />}
          </ul>
        </div>
        }

        {!results && <p>sorry there is no results</p>}

        </section>
      </div>

        )
};

export default SearchLayout;
