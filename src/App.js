import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './store'
import ShowMovie from './pages/showMovies'
import MovieDetails from './pages/movieDetails'

import GlobalStyle from './styles/global'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={ShowMovie} exact={true} />
          <Route path="/detalhes" component={MovieDetails} /> */}

          <Route path="/" component={MovieDetails} exact={true} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  )
}
