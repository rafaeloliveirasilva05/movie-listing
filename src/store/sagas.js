import { takeEvery, put, call } from 'redux-saga/effects'

import api from '../services/api'

function loadMovies({ movieName, page }) {
  const response = api.get('', {
    params: {
      s: movieName,
      page,
      type: 'movie'
    }
  })

  return response
}

function* asyncToggleMovie(action) {
  try {
    let resp = yield call(() => loadMovies(action))

    yield put({ type: 'TOGGLE_MOVIE', movies: resp.data.Search })

  } catch (error) {
    console.tron.log('error asyncToggleMovie', error)
  }
}

export default function* root() {
  yield takeEvery('ASYNC_TOGGLE_MOVIE', asyncToggleMovie)
}
