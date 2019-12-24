import React from 'react'
import { mount, shallow } from '../config/enzyme'
import toJson from 'enzyme-to-json'

import MovieDetail from '../pages/movieDetails'

jest.mock('react-redux', () => ({
  useSelector: () => ({}),
  useDispatch: () => jest.fn()
}))

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}))


describe('screen elements test show movie', () => {
  it('should render the screen MovieDetail', () => {

    const location= {
      state: 'te'
    }
    const movieDetail = mount(<MovieDetail location={location} />)

    expect(toJson(movieDetail)).toMatchSnapshot()
  })
})
