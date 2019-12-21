import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addMovies, clearMovieList } from '../../store/actions/movieAction'
import { Container, TextInput } from './styles'


const Header = () => {
  const page = useSelector(state => state.moviesReducer.page)
  const allMovies = useSelector(state => state.moviesReducer.movies)

  const dispatch = useDispatch()

  const [movieName, setMovieName] = useState('')
  const [clear, setClear] = useState(false)

  useEffect(() => {
    if (clear) return
    loadMovies(movieName)
  }, [page])

  useEffect(() => {
    if (allMovies.length === 0 && clear) {
      loadMovies(movieName)
      setClear(false)
    }
  }, [allMovies])

  function loadMovies(name) {
    name = name === '' ? 'batman' : movieName

    dispatch(addMovies(name, page))
  }

  function pesquisar() {
    if (movieName === '') return
    setClear(true)
    dispatch(clearMovieList())
  }

  function Limpar() {
    if (movieName === '') return

    dispatch(clearMovieList())
    setMovieName('')
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
