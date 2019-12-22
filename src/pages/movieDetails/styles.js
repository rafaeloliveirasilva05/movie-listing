import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width:100%;
`

export const ImagaBackgroud = styled.div`
  background-image: ${props => `url(${props.backgroundImageUrl})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 100%;
  width:100%;
  background-position: center;
  position: relative;

  div {
    height: 100%;
    background-color: rgba(0,0,0,0.8);
  }
`

export const ContainerMovie = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const PosterImage = styled.image`
  height: 350px;

  img{
    height: 100%;
  }
`

export const ContainerMovieData = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  margin-left: 20px;

  h1 {
    color: red;
    font-size: 40px;
    color: #fff;
    margin-bottom: 5px;
  }
`

export const GeneralMovieData = styled.div`
  display: flex;
  margin-bottom: 20px;

  b {
    margin-right: 20px;
    font-size: 16px;
    color: #fff;
  }
`

export const SynopsisMovie = styled.div`
  color: #fff;
  margin-bottom: 20px;

  h2 {
    font-size: 26px;
    margin-bottom: 5px;
  }

  p {
    font-size: 18px;
    text-align: justify
  }
`

export const ContainerDirector = styled.div`
  color: #fff;
  margin-bottom: 20px;

  strong {
    font-size: 20px;
  }
`

export const ContainerCast = styled.div`
  color: #fff;
  margin-bottom: 18px;

  strong {
    font-size: 20px;
  }

`

export const ContainerDistribuitor = styled.div`
  color: #fff;

  strong {
    font-size: 20px;
  }
`
