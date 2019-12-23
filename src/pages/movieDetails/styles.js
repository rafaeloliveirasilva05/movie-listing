import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const BackgroundLoadingScreen = styled.div`
  background-color: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3000;
`

export const ImagaBackgroud = styled.div`
  background-image: ${props => `url(${props.backgroundImageUrl})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 100%;
  width:100%;
  background-position: center;
  position: relative;
  filter: blur(10px);

  div {
    height: 100%;
  }
`

export const ContainerMovie = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  position: absolute;
  top: 100px;
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
  padding: 0 20px;

  h1 {
    color: red;
    font-size: 40px;
    color: #fff;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0 10px;
    padding-bottom: 60px;

    h1 {
      margin-top: 30px;
      font-size: 26px;
      margin-bottom: 15px;
    }
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

  @media (max-width: 768px) {
    justify-content: space-between;

    b {
      margin-right: 0;
      font-size: 14px;
      color: #fff;
    }
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

export const ImageNotFoundPlaceholder = styled.div`
  position: relative;
  height: 350px;

  div {
    background-color: rgba(51,51,51,0.8);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 0 10px;
    width: 100%;
    height: 100%;
  }
`
