import React from 'react'
import { mount, shallow } from '../config/enzyme'

import MovieDetails from '../pages/movieDetails'
import toJson from 'enzyme-to-json'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('screen elements test show movie', () => {

  const initialState = { movies: [] }
  const mockStore = configureStore()
  let store

  it('should render the homepage', () => {
    store = mockStore()
    const movieDetails = shallow(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    )

    expect(toJson(movieDetails)).toMatchSnapshot()
  })
})