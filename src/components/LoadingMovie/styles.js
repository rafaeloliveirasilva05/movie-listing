import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  flex-direction: column;
  background-color: #333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  z-index: 4000;

  p {
    font-size: 22px;
    color: #fff;
    font-weight: bold;
  }
`