/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext, useState } from 'react';
import axios from 'axios';

import { Context } from '../../context/context';

function InputAndAPI () {
  const [input, setInput] = useState('');
  const { searchType, setResults, token, results, setError, setLoading, loading } = useContext(Context);

  const searchParams = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

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
        // eslint-disable-next-line no-debugger
        setResults(data?.[searchType].items || []);
        setLoading(false);
        setInput('');
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
    console.log(input);
  }

  console.log(results, searchType, ' <<<<<<<');

  return (
    <div>
         {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={searchParams}>
            <i className="fa-sharp fa-solid fa-magnifying-glass fa-2xl" />
            <input type="text" id="spotify-search-input" disabled={loading} onChange={inputText} value={input} />
        </form>

    </div>
  )
}

export default InputAndAPI;
