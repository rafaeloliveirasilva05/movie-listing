const INITIAL_STATE = {
  movies: [],
  page: 1
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
        movies: [],
        page: 1
      }

    default:
      return state
  }
}
