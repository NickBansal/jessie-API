import React, { useContext } from 'react';

import { Context } from '../../context/context';
import { type Common } from '../search-layout/search-layout';

interface ArtistsResult extends Common {
  images: Array<{
    url: string
  }>;
}

function ArtistLayout () {
    const { results } = useContext(Context);
    return (
        results.map((result: ArtistsResult) => {
           console.log('artists is selected');
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
    )
}

export default ArtistLayout;
