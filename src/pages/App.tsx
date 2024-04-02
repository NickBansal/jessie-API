import SearchLayout from '../components/search-layout/search-layout';
import { ContextProvider } from '../context/context';

import './app.css';

function App() {
  // Add a toggle for different selection types

  return (
  <ContextProvider>
  <div>

    <SearchLayout />

  </div>
  </ContextProvider>
    )
}

export default App;
