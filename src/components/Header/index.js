import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

import logoMovie from '../../assets/images/IconMovie.png'
import {
  addMovies,
  clearMovieList,
  navigateBetweenPages,
  setChoosedMovie
} from '../../store/actions/movieAction'

import {
  Container,
  TextInput,
  ContainerTextInputMovie,
  ClearButton,
  SearchButton,
  ContainderNameLog
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const page = useSelector(state => state.moviesReducer.page)
  const allMovies = useSelector(state => state.moviesReducer.movies)
  const isNavegation = useSelector(state => state.moviesReducer.isNavegation)

  const [movieName, setMovieName] = useState(useSelector(state => state.moviesReducer.nameChoosedMovie))
  const [clear, setClear] = useState(false)

  useEffect(() => {
    if (isNavegation) {
      dispatch(navigateBetweenPages(false))
      return
    }

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

  function searchMovie() {
    if (movieName === '') return

    setClear(true)
    dispatch(clearMovieList())
    dispatch(setChoosedMovie(movieName))
  }

  function clearFieldMovie() {
    if (movieName === '') return

    setClear(true)
    dispatch(clearMovieList())
    setMovieName('')
  }

  return (
    <Container>
      <ContainderNameLog>
        <img src={logoMovie} />
        <h1>Movies List</h1>
      </ContainderNameLog>

      <ContainerTextInputMovie>
        <SearchButton onClick={searchMovie}>
          <FaSearch size={18} color={'#ccc'} />
        </SearchButton>
        <TextInput
          type="text"
          placeholder='Título do filme'
          value={movieName}
          onChange={e => setMovieName(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              searchMovie()
            }
          }}
        />
        <ClearButton
          onClick={clearFieldMovie}>
          {movieName === '' ? null : <MdClose size={22} color={'#ccc'} />}
        </ClearButton>
      </ContainerTextInputMovie >
    </Container>
  )
}

export default Header
