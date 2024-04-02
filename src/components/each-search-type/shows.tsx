import React, { useContext } from 'react';

import { Context } from '../../context/context';
import { type Common } from '../search-layout/search-layout';

interface ShowsResult extends Common {
  total_episodes: number;
  images: Array<{
    url: string
  }>;

  media_type: string;

}

function ShowLayout () {
  const { results }: { results: any[] } = useContext(Context);
    return (
        results.map((result: ShowsResult) => {
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

export default ShowLayout;
