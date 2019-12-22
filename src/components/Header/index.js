import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

import { addMovies, clearMovieList } from '../../store/actions/movieAction'
import { Container, TextInput, ContainerTextInputMovie, ClearButton, SearchButton } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const page = useSelector(state => state.moviesReducer.page)
  const allMovies = useSelector(state => state.moviesReducer.movies)

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
    setClear(true)
    dispatch(clearMovieList())
    setMovieName('')
  }

  return (
    <Container>
      <SearchButton onClick={pesquisar}>
        <FaSearch size={22} color={'#ccc'} />
      </SearchButton>
      <ContainerTextInputMovie>
        <TextInput
          type="text"
          placeholder='Título do filme'
          value={movieName}
          onChange={e => setMovieName(e.target.value)} />
        <ClearButton
          onClick={Limpar}>
          {movieName === '' ? null : <MdClose size={22} color={'#ccc'} />}
        </ClearButton>
      </ContainerTextInputMovie >
    </Container>
  )
}

export default Header
