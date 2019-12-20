export function addMovies (movieName, page) {
  return {
    type: 'ASYNC_TOGGLE_MOVIE',
    movieName,
    page,
  }
}