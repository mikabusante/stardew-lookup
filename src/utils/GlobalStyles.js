import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: #222;

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Inknut Antiqua", serif;
    margin: 0;
    line-height: 2em;
  }

  h3 {
   font-size: 0.8em;
   font-weight: 600;
   margin-bottom: 0.25em;
  }

  p { 
    margin: 0;
    font-family: 'Anonymous Pro'
  }

  
`;

export default GlobalStyle;
