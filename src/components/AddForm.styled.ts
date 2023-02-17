import styled from 'styled-components'

export const Button = styled.button`
  background: #003566;
  color: #f7fff7;
  margin-top: 15px;
  font-size: 18px;
  padding: 10px 28px;
  border: none;
  border-radius: 5px;
  border: white solid 1px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f7fff7;
    color: #4ecdc4;
  }
`

export const Input = styled.input`
  border: 2px solid #4ecdc4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45%;
  width: 50%;
  background: #f7fff7;
  padding: 0px 20px;
  font-size: 24px;
  color: #003566;
  font-weight: 600;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #4ecdc4;
  }
`
