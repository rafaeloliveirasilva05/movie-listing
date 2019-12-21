import React from 'react'

import { Container } from './styles'


const MovieDetails = (teste) => {
  console.tron.log('teste', teste.location.state)

  const { Poster } = teste.location.state

  return (
    <Container>
      <img src={Poster}></img>
    </Container>
  )
}

export default MovieDetails