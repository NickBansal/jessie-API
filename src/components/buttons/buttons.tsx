import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../../constants/spotify';

import './buttons.css';

export const Login = () => {
  return (
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      className="spotify-link"
    >
      Login to Spotify
    </a>
  );
};

export const Logout = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button onClick={handleClick} className="spotify-link">
      Logout
    </button>
  );
};
