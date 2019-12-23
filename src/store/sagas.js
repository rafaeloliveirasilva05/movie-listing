import { takeEvery, put, call, all } from 'redux-saga/effects'

import api from '../services/api'

function loadMovies(movieName, page) {
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
    yield put({ type: 'TOGGLE_STATUS_LOADING', isLoading: true })

    let movies = []
    for (var i = 0; i < 4; i++) {
      let page = action.page + i
      let resp = yield call(() => loadMovies(action.movieName, page))

      if (page === 1) {
        console.log('totalResults', resp.data.totalResults)
        console.tron.log('totalResults', resp.data.totalResults)
        yield put({ type: 'TOGGLE_SEARCH_TOTAL_MOVIES', totalMovies: parseInt(resp.data.totalResults) })
      }

      // if (resp.data.Response === 'False' && movies.length === 0) {
      //   throw {
      //     type: 'not_movie',
      //     message: resp.data.Error
      //   }
      // }
      console.log('resp.data.Search', resp.data.Search)
      if (resp.data.Search) {
        movies = [
          ...movies,
          ...resp.data.Search
        ]
      }

      console.log('movies 1', movies)
    }

    console.tron.log('movies', movies.length)
    console.log('movies', movies.length)


    yield put({ type: 'MOVIE_REQUEST_ERROR', requestError: null })
    yield put({ type: 'TOGGLE_MOVIE', movies })

  } catch (e) {
    yield put({ type: 'MOVIE_REQUEST_ERROR', requestError: e })

  }
  finally {
    yield put({ type: 'TOGGLE_STATUS_LOADING', isLoading: false })
  }
}

function loadMovieDetails({ movieId }) {
  const response = api.get('', {
    params: {
      i: movieId,
      plot: 'full'
    }
  })

  return response
}

function* asyncGetMovieData(action) {
  try {
    yield put({ type: 'TOGGLE_STATUS_LOADING', isLoading: true })

    let resp = yield call(() => loadMovieDetails(action))

    yield put({ type: 'TOGGLE_MOVIE_DETAILS', movieDetails: resp.data })

  } catch (error) {
    console.tron.log('error asyncToggleMovie', error)
  }
  finally {
    yield put({ type: 'TOGGLE_STATUS_LOADING', isLoading: false })
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
