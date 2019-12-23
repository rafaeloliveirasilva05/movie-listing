import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaRegSadCry } from 'react-icons/fa'

import Header from '../../components/Header'
import { refreshPage } from '../../store/actions/movieAction'
import backgroundBlackImage from '../../assets/images/backgroundBlack.jpg'
import { Container, Card, ImageNotFoundPlaceholder, ErrorScreen } from './styles'

const ShowMovie = () => {
  const [isFetching, setIsFetching] = useState(false)
  const movies = useSelector(state => state.moviesReducer.movies)
  const page = useSelector(state => state.moviesReducer.page)
  const totalMovies = useSelector(state => state.moviesReducer.totalMovies)
  const requestError = useSelector(state => state.moviesReducer.requestError)
  const isLoading = useSelector(state => state.moviesReducer.isLoading)

  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (totalMovies === movies.length) return
    if (!isFetching) return

    function insertPage() {
      dispatch(refreshPage(page + 4))
      setIsFetching(false)
    }

    insertPage()
  }, [isFetching])


  function handleScroll() {
    let innerHeight = window.innerHeight
    let scrollTop = document.documentElement.scrollTop
    let scrollHeight = document.documentElement.scrollHeight

    if (innerHeight + scrollTop > scrollHeight - 1 && scrollTop > 0) {
      setIsFetching(true)
    }

    return
  }

  function renderMovieItem(movie) {
    return (
      <Card>
        <div
          onClick={() => history.push("/detalhes", movie)}>
          {
            movie.Poster === 'N/A'
              ?
              <ImageNotFoundPlaceholder>
                <img src={backgroundBlackImage} />
                <div>{movie.Title}</div>
              </ImageNotFoundPlaceholder>
              :
              <img src={movie.Poster} />
          }
        </div>
      </Card>
    )
  }

  return (
    <Container>
      <Header />
      <ul>
        {movies.map(movie => renderMovieItem(movie))}
      </ul>
      {/* {requestError === null || isLoading === true
        ?
        <ul>
          {movies.map(movie => renderMovieItem(movie))}
        </ul>
        :
        <ErrorScreen>
          <FaRegSadCry size={80} color={'#ccc'} />
          <div>
            <p>Descuple</p>
            <p>O filme pesquisado não foi encontrado!</p>
          </div>
        </ErrorScreen>
      } */}

    </Container>
  )
}

export default ShowMovie
