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
export const ErrorScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  background-color: #333;

  div {
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const Card = styled.div`
  cursor:pointer;

  li {
    width: 100%;
    height: 100%;
  }

  img{
    width: 100%;
    height: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.01);
  }
`
export const ImageNotFoundPlaceholder = styled.div`
  position: relative;

  div {
    background-color: rgba(51,51,51,0.8);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-weight: bold;
    padding: 0 10px;
    width: 100%;
    height: 100%;
  }
`