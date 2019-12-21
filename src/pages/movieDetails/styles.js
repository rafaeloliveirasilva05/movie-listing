import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.image`
  height: 350px;
  background-color: red;

  img{
    height: 100%;
  }
`

export const ContainerMovieData = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  background-color: green;
  justify-content: space-between;
`

export const MovieName = styled.div`
  background-color: blue;
`

export const DetailMovie = styled.div`
  background-color: pink;
`

export const GeneralData = styled.div`
  background-color: orange;
`

export const ContainerEnvolvidos = styled.div`
  background-color: orange;
`

export const ContainerNota = styled.div`
  background-color: pink;
`
