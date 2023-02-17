import styled from 'styled-components'
export const TodoLabel = styled.label<{ status: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 24px;
  background-color: #003566;
  width: 500px;
  border: white solid 1px;
  margin: 10px;
  font-weight: 600;
  color: ${props => (props.status ? '#ffe66d' : '#ff6b6b')};
  text-decoration: ${props => (props.status ? 'line-through' : 'none')};
  cursor: pointer;

  input {
    align-items: flex-end;
  }

  &:hover {
    background-color: #003566;
  }

  &.status {
    text-decoration: line-through;
  }
`
