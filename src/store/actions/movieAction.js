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

export function getMovieData (movieId) {
  return {
    type: 'ASYNC_GET_MOVIE_DATA',
    movieId
  }
}

export function navigateBetweenPages (isNavegation) {
  return {
    type: 'NAVIGATE_BETWEEN_PAGES',
    isNavegation
  }
}

export function clearMovieDetails () {
  return {
    type: 'CLEAR_MOVIE_DETAILS'
  }
}

export function setChoosedMovie (nameChoosedMovie) {
  return {
    type: 'TOGGLE_RESEARCHED_MOVIE',
    nameChoosedMovie
  }
}
