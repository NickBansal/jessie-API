import React, { type ChangeEvent, useContext } from "react";

import { Context } from "../../context/context";

function SearchTypeDropdown () {
  const { setResults, setSearchTypes } = useContext(Context);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setResults([]);
    setSearchTypes(e.target.value);
  }
  return (
  <div className='search-container'>
    <p className='choose-type'>Please choose the type you want to search for</p>
    <select className='search-type-dropdown' name='search-types' id='search-types' onChange={handleTypeChange}>
      <option disabled selected hidden>Please choose the type</option>
      <option value="artists">artists</option>
      <option value="albums">albums</option>
      <option value="tracks">tracks</option>
      <option value="audiobooks">audiobooks</option>
      <option value="shows">shows</option>
    </select>
  </div>)
}

export default SearchTypeDropdown;
