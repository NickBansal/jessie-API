import React from 'react';

import { type Common } from '../search-layout/search-layout';

interface AlbumResult extends Common {
  images: Array<{
    url: string
  }>;
  artists: Array<{
    name: string;
  }>;
}

function AlbumLayout ({ results }: { results: any[] }) {
    return (
        results.map((result: AlbumResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Aritist: {result.artists[0].name}</h4>
                </div>
            </li>
            </>)
          })
    )
}

export default AlbumLayout;
