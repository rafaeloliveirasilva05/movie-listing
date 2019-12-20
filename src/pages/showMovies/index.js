import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addMovies } from '../../store/actions/movieAction'
import { Container, Card } from './styles'

const ShowMovie = () => {
  const movies = useSelector(state => state.moviesReducer.movies)
  const dispatch = useDispatch()

  const [isFetching, setIsFetching] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadMovies()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return

    loadMovies()
  }, [isFetching])

  function handleScroll() {
    let innerHeight = window.innerHeight
    let scrollTop = document.documentElement.scrollTop
    let scrollHeight = document.documentElement.scrollHeight

    if (innerHeight + scrollTop !== scrollHeight) return

    setIsFetching(true)
  }

  function loadMovies() {
    dispatch(addMovies('super', page))
    setPage(page + 1)
    setIsFetching(false)
  }

  function renderMovieItem(movie) {
    return (
      <Card>
        <div>
          <img src={movie.Poster}></img>
        </div>
      </Card>
    )
  }
  console.tron.log('page', page)
  return (
    <Container>
      <ul>
        {movies.map(movie => renderMovieItem(movie))}
      </ul>
    </Container>
  )
}

export default ShowMovie
