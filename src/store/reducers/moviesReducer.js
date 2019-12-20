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

    default:
      return state
  }
}