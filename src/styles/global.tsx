import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
  box-sizing: border-box;


  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#root
{
}

* {
  box-sizing: border-box;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  outline: 0;
}

*:before, *:after {
  box-sizing: inherit;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

div, section, nav, a, button, form, main {
  display: flex;
}

button, input {
  border: none;
  outline: none;
}

a {
  text-decoration: none;
}





`;

export default GlobalStyles;
