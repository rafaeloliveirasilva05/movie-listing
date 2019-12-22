import { takeEvery, put, call, all } from 'redux-saga/effects'

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

function loadMovieDetails({ movieId }) {
  const response = api.get('', {
    params: {
      i: movieId,
      plot:'full'
    }
  })

  return response
}

function* asyncGetMovieData(action) {
  try {
    let resp = yield call(() => loadMovieDetails(action))

    yield put({ type: 'TOGGLE_MOVIE_DETAILS', movieDetails: resp.data })

  } catch (error) {
    console.tron.log('error asyncToggleMovie', error)
  }
}

export default function* root() {
  yield all(
    [
      takeEvery('ASYNC_TOGGLE_MOVIE', asyncToggleMovie),
      takeEvery('ASYNC_GET_MOVIE_DATA', asyncGetMovieData),
    ]
  )
}
