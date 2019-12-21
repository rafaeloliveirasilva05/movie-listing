import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieData } from '../../store/actions/movieAction'
import {
  Container,
  Image,
  ContainerMovieData,
  MovieName,
  DetailMovie,
  GeneralData,

  ContainerEnvolvidos,
  ContainerNota
} from './styles'

import detailMovie from '../../Fake/detailMovie'
import imageDog from '../../assets/images/cachorrop.jpg'


const MovieDetails = (teste) => {
  // console.tron.log('teste', teste.location.state)

  // const { Poster, imdbID } = teste.location.state
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getMovieData(imdbID))
  // }, [])

  // const [detailMovie] = useState(detailMovie)
  console.tron.log(detailMovie)

  return (
    <Container>
      

      <Image>
        <img src={imageDog} />
      </Image>

      <ContainerMovieData>
        <MovieName>
          <h1>{detailMovie.Title}</h1>
        </MovieName>

        {/* <GeneralData>
          {detailMovie.Year}
          {detailMovie.Runtime}
          {detailMovie.Genre}
        </GeneralData> */}

        <DetailMovie>
          {detailMovie.Plot}
        </DetailMovie>

        <ContainerEnvolvidos>
          {detailMovie.Director}
          {detailMovie.Actors}
        </ContainerEnvolvidos>

        <ContainerNota>
          {detailMovie.imdbRating}
          {detailMovie.Production}
        </ContainerNota>

      </ContainerMovieData>

    </Container>
  )
}

export default MovieDetails

