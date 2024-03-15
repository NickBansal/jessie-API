export enum Search {
  ARTISTS = 'artists',
  ALBUMS = 'albums',
  TRACKS = 'tracks',
  AUDIOBOOKS = 'audiobooks'
}

export interface SearchTypes {
  searchType: Search;
}
