import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addMovies, clearMovieList } from '../../store/actions/movieAction'
import { Container, TextInput } from './styles'


const Header = () => {
  const page = useSelector(state => state.moviesReducer.page)
  const dispatch = useDispatch()

  const [movieName, setMovieName] = useState('')

  useEffect(() => {
    loadMovies(movieName)
  }, [page])

  function loadMovies(name) {
    name = name === '' ? 'batman' : movieName

    dispatch(addMovies(name, page))
  }

  function pesquisar() {
    if (movieName === '') return

    dispatch(clearMovieList())
    loadMovies(movieName)
  }

  function Limpar() {
    if (movieName === '') return

    dispatch(clearMovieList())
    setMovieName('')
    loadMovies('')
  }

  return (
    <Container>

      <button onClick={pesquisar}>Pesquisar</button>
      <button onClick={Limpar}>Limpar</button>

      <TextInput
        type="text"
        placeholder='Buscar colaborador'
        value={movieName}
        onChange={e => setMovieName(e.target.value)}
      />

    </Container>
  )
}

export default Header
