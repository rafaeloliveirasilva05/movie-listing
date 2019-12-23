import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../../assets/lotties/MovieLoading.json'
import { Container } from './styles'

const LoadingMovie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Container>
      <Lottie 
        options={defaultOptions}
        height={300}
        width={300}
      />
      <p>Carregando...</p>
    </Container>
  )
}

export default LoadingMovie
