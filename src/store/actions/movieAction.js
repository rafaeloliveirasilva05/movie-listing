export function addMovies (movieName, page) {
  return {
    type: 'ASYNC_TOGGLE_MOVIE',
    movieName,
    page,
  }
}

export function refreshPage (pageNumber) {
  return {
    type: 'TOGGLE_PAGE',
    page: pageNumber
  }
}

export function clearMovieList () {
  return {
    type: 'CLEAR_MOVIE_LIST'
  }
}
