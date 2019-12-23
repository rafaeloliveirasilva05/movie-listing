import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'

import LoadingMovie from './components/LoadingMovie'
import ShowMovie from './pages/showMovies'
import MovieDetails from './pages/movieDetails'

import GlobalStyle from './styles/global'

export default function App() {
  const isLoading = useSelector(state => state.moviesReducer.isLoading)

  return (
    <BrowserRouter>
      {isLoading ? <LoadingMovie /> : null}
      <Header />
      <Switch>
        <Route path="/" component={ShowMovie} exact={true} />
        <Route path="/detalhes" component={MovieDetails} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
