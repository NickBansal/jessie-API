import React from 'react';

import { type Common } from '../search-layout/search-layout';

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

function TrackLayout ({ results }: { results: any[] }) {
  console.log(results, " <<<<<<")
    return (
        results.map((result: TrackResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.album.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Aritist: {result.artists[0].name}</h4>
                </div>
            </li>
            </>)
          })

    )
}

export default TrackLayout;
