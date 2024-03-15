export enum Search {
  ARTISTS = 'artists',
  ALBUMS = 'albums',
  TRACKS = 'tracks',
  AUDIOBOOKS = 'audiobooks',
  SHOWS = 'shows'
}

export interface SearchTypes {
  searchType: Search;
}
