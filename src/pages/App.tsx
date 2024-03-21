import { type ChangeEvent, useState } from 'react';

import SearchLayout from '../components/search-layout/search-layout';

// import { Search } from '../types/search-types';
import './app.css';

function App() {
  // Add a toggle for different selection types

  const [searchType, setSearchTypes] = useState<any>('');
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchTypes(event.target.value);
  }

  return (
  <>
    <p className='choose-type'>Please choose the type you want to search for</p>
    <select name='search-types' id='search-types' onChange={(e) => { handleChange(e); console.log(searchType); }}>
      <option disabled selected hidden>Please choose the type</option>
      <option value="artists">artists</option>
      <option value="albums">albums</option>
      <option value="tracks">tracks</option>
      <option value="audiobooks">audiobooks</option>
      <option value="shows">shows</option>
    </select>
    {searchType
    ? <SearchLayout searchType={searchType} />
    : null}

  </>
    )
}

export default App;
