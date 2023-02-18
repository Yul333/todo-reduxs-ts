import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  );
  height: 100vh;
  width: 100%;
  border: 1px solid #003566;
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: #3d99be;
  height: 70%;
  width: 40%;
  padding: 20px;
  border-radius: 5px;
  position: absolute;
  box-shadow: 2px 2px 8px black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
`
