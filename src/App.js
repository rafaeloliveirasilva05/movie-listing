import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import ShowMovie from './pages/showMovies'
import GlobalStyle from './styles/global'

export default function App() {
  return (
    <Provider store={store}>
      <ShowMovie />
      <GlobalStyle />
    </Provider>
  )
}
