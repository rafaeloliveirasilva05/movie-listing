import styled from 'styled-components'

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 20px;
    padding: 0 40px;
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 4px;
      padding: 0 5px;
      padding-top: 60px;
    }
  }
`

export const Card = styled.div`
  cursor:pointer;

  div{
    width: 100%;
    height: 100%;
  }

  img{
    width: 100%;
    height: 100%;
    display: block
  }

  &:hover {
    transform: scale(1.01)
  }
`