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
        height={200}
        width={200}
      />
      <p>Carregando...</p>
    </Container>
  )
}

export default LoadingMovie
