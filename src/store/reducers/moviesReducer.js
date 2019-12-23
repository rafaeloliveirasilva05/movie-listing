const INITIAL_STATE = {
  movies: [],
  page: 1,
  movieDetails: {},
  isNavegation: false,
  nameChoosedMovie: '',
  isLoading: false
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          ...action.movies
        ]
      }

    case 'TOGGLE_PAGE':
      return {
        ...state,
        page: action.page
      }

    case 'CLEAR_MOVIE_LIST':
      return {
        ...state,
        movies: [],
        page: 1
      }

    case 'TOGGLE_MOVIE_DETAILS':
      return {
        ...state,
        movieDetails: action.movieDetails
      }

    case 'NAVIGATE_BETWEEN_PAGES':
      return {
        ...state,
        isNavegation: action.isNavegation
      }

    case 'CLEAR_MOVIE_DETAILS':
      return {
        ...state,
        movieDetails: {}
      }

    case 'TOGGLE_RESEARCHED_MOVIE':
      return {
        ...state,
        nameChoosedMovie: action.nameChoosedMovie
      }

    case 'TOGGLE_STATUS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }

    default:
      return state
  }
}
