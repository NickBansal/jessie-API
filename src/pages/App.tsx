import SearchLayout from '../components/search-layout/search-layout';
import { Search } from '../types/search-types';

import './app.css';

function App() {
  return <SearchLayout searchType={Search.SHOWS} />;
}

export default App;
