import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    transition: 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
