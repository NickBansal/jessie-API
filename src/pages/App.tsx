import { ButtonLink } from '../components/buttons/buttons';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../constants/spotify';

import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Music API generator</p>
      </header>

      <section className="App-section">
        <ButtonLink
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          btnText="Login to Spotify"
        />
      </section>
    </div>
  );
}

export default App;
