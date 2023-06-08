import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#0b0c1e, #3c2940);
  height: 100vh;
  padding: 8%;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const Description = styled.p`
  color: white;
  font-family: 'Roboto';
`

export const Button = styled.button`
  color: white;
  background-color: #06b6d4;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  border: 0px;
`
