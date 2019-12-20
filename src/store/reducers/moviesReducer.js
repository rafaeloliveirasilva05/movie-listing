const INITIAL_STATE = {
  movies: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_MOVIE':
      return {
        movies: [
          ...state.movies,
          ...action.movies
        ]
      }

    default:
      return state
  }
}