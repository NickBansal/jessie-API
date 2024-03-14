export const windowsHash = () => {
  const hash = window?.location?.hash;
  let hashToken = window?.localStorage?.getItem('token');

  if (!hashToken && hash) {
    hashToken = hash
      .substring(1)
      .split('&')
      .find((elem) => elem.startsWith('access_token'))
      .split('=')[1];

    window.location.hash = '';
    window.localStorage.setItem('token', hashToken);
  }

  return hashToken;
};
