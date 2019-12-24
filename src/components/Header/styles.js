import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #0a0a0a;
  padding: 0 40px;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  z-index: 1000;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 10px;
  }
`

export const TextInput = styled.input`
  height: 30px;
  width: 320px ;
  border-radius:4px;
  border: none;
  background-color: #333;
  padding-left: 10px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 200px ;
  }
`

export const ContainerTextInputMovie = styled.div`
  flex-direction: row;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background: transparent;
  outline: none;
  margin-right: 12px;
  cursor: pointer;
`

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-right: 12px;
  cursor: pointer;
`
