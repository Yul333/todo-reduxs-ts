import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
 
    color: #f7fff7;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    font-size: 20px;
    padding: 0;
    margin: 0;

    animation: color-change 10s infinite;
}
h1 {
    font-family: 'Nunito Sans', sans-serif;
   font-weight: 900;
	text-transform: uppercase;
    color: #f7fff7;
  }

  a {
    color: #f7fff7;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #4ecdc4;
    }
  }
`

export default GlobalStyle
