import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.base.background};
    color: ${props => props.theme.base.text};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    font-weight: 400;
    font-size: 1rem;
  } 
`