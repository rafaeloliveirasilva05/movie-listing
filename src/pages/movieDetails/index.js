import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieData } from '../../store/actions/movieAction'
import {
  Container,
  ImagaBackgroud,
  ContainerMovie,
  PosterImage,
  GeneralMovieData,
  SynopsisMovie,
  ContainerMovieData,
  ContainerDirector,
  ContainerCast,
  ContainerDistribuitor
} from './styles'

import detailMovie from '../../Fake/detailMovie'

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
      <ImagaBackgroud
        backgroundImageUrl={detailMovie.Poster}>
        <div />
      </ImagaBackgroud>

      <ContainerMovie>
        <PosterImage>
          <img src={detailMovie.Poster} />
        </PosterImage>

        <ContainerMovieData>
          <h1>{detailMovie.Title}</h1>

          <GeneralMovieData>
            <b>{detailMovie.Year}</b>
            <b>*</b>
            <b>{detailMovie.Runtime}</b>
            <b>*</b>
            <b>{detailMovie.Genre}</b>
            <b>*</b>
            <b>IMDb {detailMovie.imdbRating}</b>
          </GeneralMovieData>

          <SynopsisMovie>
            <h2>Sinopse</h2>
            <p>{detailMovie.Plot}</p>
          </SynopsisMovie>

          <ContainerDirector>
            <strong>Direção</strong>
            <p>{detailMovie.Director}</p>
          </ContainerDirector>

          <ContainerCast>
            <strong>Elenco</strong>
            <p>{detailMovie.Actors}</p>
          </ContainerCast>

          <ContainerDistribuitor>
            <strong>Distribuidor</strong>
            <p>{detailMovie.Production}</p>
          </ContainerDistribuitor>

        </ContainerMovieData>
      </ContainerMovie>
    </Container>
  )
}

export default MovieDetails
