import React, { type ChangeEvent } from "react";

function SearchTypeDropdown ({ handleTypeChange }: { handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void }) {
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
