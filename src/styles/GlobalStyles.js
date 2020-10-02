import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset}
	* {
	box-sizing: border-box;
	}
	a {
    color: #333;
    text-decoration: none;
  }
  input,
  button {
    &:focus,
    &:active {
      outline: none;
    }
  }
`

export default GlobalStyles