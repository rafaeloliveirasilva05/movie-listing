import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #0a0a0a;
  padding: 0 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  z-index: 1000;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 10px;
  }
`

export const ContainderNameLog = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  
  h1 {
    font-size: 22px;
    color: red;
    margin-left: 10px;
  }

  img {
    height: 30px;
  }

  @media (max-width: 768px) {
    flex: 1;
    h1 {
      display: none;
    }

    img {
      height: 25px;
    }
  }
`

export const TextInput = styled.input`
  height: 35px;
  width: 50% ;
  border-radius:4px;
  border: none;
  background-color: #333;
  padding-left: 10px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100% ;
  }
`

export const ContainerTextInputMovie = styled.div`
  flex-direction: row;
  display: flex;
  flex: 2;
  position: relative;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex: 4;
  }
`

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background: transparent;
  outline: none;
  margin-right: 12px;
  height:100%;
  cursor: pointer;
`

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-right: 12px;
  cursor: pointer;
`
