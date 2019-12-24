import React from 'react'
import { mount, shallow } from '../config/enzyme'
import toJson from 'enzyme-to-json'

import ShowMovies from '../pages/showMovies'

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
  it('should render the homepage', () => {
    const showMovies = mount(<ShowMovies />)

    expect(toJson(showMovies)).toMatchSnapshot()
  })
})
