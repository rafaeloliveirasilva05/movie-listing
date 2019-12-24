import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useHistory } from 'react-router-dom'

import backgroundBlackImage from '../../assets/images/backgroundBlack.jpg'
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
  BackgroundLoadingScreen,
  ImageNotFoundPlaceholder,
  Header
} from './styles'

const MovieDetails = (movie) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { imdbID } = movie.location.state
  const movieDetails = useSelector(state => state.moviesReducer.movieDetails)
  const isLoading = useSelector(state => state.moviesReducer.isLoading)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getMovieData(imdbID))
    dispatch(navigateBetweenPages(true))

    return () => dispatch(clearMovieDetails())
  }, [])

  return (
    <Container>
      {isLoading && <BackgroundLoadingScreen />}

      <Header>
        <button onClick={() => history.goBack()}>
          <IoMdArrowRoundBack size={32} color={'#ccc'} />
        </button>
      </Header>

      <ImagaBackgroud
        backgroundImageUrl={movieDetails.Poster}>
        <div />
      </ImagaBackgroud>

      <ContainerMovie>
        <PosterImage>
          {
            movieDetails.Poster === 'N/A'
              ?
              <ImageNotFoundPlaceholder  >
                <div>Poster <br /> Indisponível</div>
                <img src={backgroundBlackImage} />
              </ImageNotFoundPlaceholder >
              :
              <img src={movieDetails.Poster} />
          }
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
