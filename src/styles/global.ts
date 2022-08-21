import {createGlobalStyle, css} from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({theme}) => css`
    @media (max-width: 1080px) {
   
    }
    @media (max-width: 768px) {
    
    }
    body {
      font-family:${theme.font.body};
      transition: background-color 0.3s, color 0.3s;
    }
  }
  img{
    width: 100%;
  }
  body,
  input,
  textarea,
  button {
    
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: text-field;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  code {
  padding: 0.2em;
  border-radius: 3px;

  pre>& {
      display: block;
      padding: 1em;
      margin: 0;
  }
}
  `}
`;
export default GlobalStyles;
