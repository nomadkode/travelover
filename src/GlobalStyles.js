import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  }

  html, body {
    overflow-x: hidden;
  }

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: #f1f1f1;
  border-radius: 50px;
}

body::-webkit-scrollbar-track {
  background-color: #0a1931;
}
`;

export default GlobalStyle;
