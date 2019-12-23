import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import { refreshPage } from '../../store/actions/movieAction'
import { Container, Card } from './styles'

const ShowMovie = () => {
  const [isFetching, setIsFetching] = useState(false)
  const movies = useSelector(state => state.moviesReducer.movies)
  const page = useSelector(state => state.moviesReducer.page)
  const dispatch = useDispatch()

  let history = useHistory()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
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
          <img src={movie.Poster}></img>
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
    </Container>
  )
}

export default ShowMovie
