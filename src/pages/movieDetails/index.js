import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getMovieData,
  navigateBetweenPages,
  clearMovieDetails
} from '../../store/actions/movieAction'

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
  ContainerDistribuitor,
  BackgroundLoadingScreen
} from './styles'

const MovieDetails = (movie) => {
  const dispatch = useDispatch()
  const { imdbID } = movie.location.state
  const movieDetails = useSelector(state => state.moviesReducer.movieDetails)

  const isLoading = useSelector(state => state.moviesReducer.isLoading)

  useEffect(() => {
    dispatch(getMovieData(imdbID))
    dispatch(navigateBetweenPages(true))

    return () => dispatch(clearMovieDetails())
  }, [])

  return (
    <Container>
      {isLoading && <BackgroundLoadingScreen />}

      <ImagaBackgroud
        backgroundImageUrl={movieDetails.Poster}>
        <div />
      </ImagaBackgroud>

      <ContainerMovie>
        <PosterImage>
          <img src={movieDetails.Poster} />
        </PosterImage>

        <ContainerMovieData>
          <h1>{movieDetails.Title}</h1>

          <GeneralMovieData>
            <b>{movieDetails.Year}</b>
            <b>-</b>
            <b>{movieDetails.Runtime}</b>
            <b>-</b>
            <b>{movieDetails.Genre}</b>
            <b>-</b>
            <b>IMDb {movieDetails.imdbRating}</b>
          </GeneralMovieData>

          <SynopsisMovie>
            <h2>Sinopse</h2>
            <p>{movieDetails.Plot}</p>
          </SynopsisMovie>

          <ContainerDirector>
            <strong>Direção</strong>
            <p>{movieDetails.Director}</p>
          </ContainerDirector>

          <ContainerCast>
            <strong>Elenco</strong>
            <p>{movieDetails.Actors}</p>
          </ContainerCast>

          <ContainerDistribuitor>
            <strong>Distribuidor</strong>
            <p>{movieDetails.Production}</p>
          </ContainerDistribuitor>

        </ContainerMovieData>
      </ContainerMovie>
    </Container>
  )
}

export default MovieDetails
