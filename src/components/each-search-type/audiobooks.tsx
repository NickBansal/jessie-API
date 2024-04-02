import React, { useContext } from 'react';

import { AppContext } from '../../context/context';
import { type Common } from '../search-layout/search-layout';

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

function AudiobookLayout () {
  const { results }: { results: any[] } = useContext(AppContext);
    return (
        results.map((result: AudiobooksResult) => {
            return (
            <>
            <li
              key={result.id}
              className='single-result'>
                <div><img src={result.images[0].url} /></div>
                <div className='name-genre'>
                  <h3 className='result-name'>{result.name}</h3>
                  <h4>Total Chapters: {result.total_chapters}</h4>
                </div>
            </li>
            </>)
          })
    )
}

export default AudiobookLayout;
