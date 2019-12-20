import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import {
  Container,
  Card
} from './styles'

export default function ShowMovie() {
  const [movies, setMovies] = useState([])
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

  async function loadMovies(movieName = 'batman') {
    const response = await api.get('', {
      params: {
        s: movieName,
        page,
        type: 'movie'
      }
    })

    setMovies(prevState => ([
      ...prevState,
      ...response.data.Search
    ]))

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

  return (
    <Container>
      <ul>
        {movies.map(movie => renderMovieItem(movie))}
      </ul>
    </Container>
  )
}