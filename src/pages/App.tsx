import SearchLayout from '../components/search-layout/search-layout';
import { Search } from '../types/search-types';

import './app.css';

function App() {
  // Add a toggle for different selection types
  return <SearchLayout searchType={Search.SHOWS} />;
}

export default App;
