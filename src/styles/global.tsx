import styled, { createGlobalStyle } from 'styled-components';
import Poppins_Bold from 'src/assets/fonts/Poppins-Bold.ttf'; 
import Poppins_Medium from 'src/assets/fonts/Poppins-Medium.ttf';
import Poppins_Regular from 'src/assets/fonts/Poppins-Regular.ttf';
import Poppins_ExtraBold from 'src/assets/fonts/Poppins-ExtraBold.ttf';

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

@font-face {
  font-family: 'poppins-bold';
  src: url(${Poppins_Bold});
}

@font-face {
  font-family: 'poppins-regular';
  src: url(${Poppins_Regular});
}

@font-face {
  font-family: 'poppins-medium';
  src: url(${Poppins_Medium});
}

@font-face {
  font-family: 'poppins-extrabold';
  src: url(${Poppins_ExtraBold});
}

`;

export const Center = styled.div `
  width:100%;
  justify-content: center;
	align-items: center;
  display: flex;
  flex-direction: column;
  z-index:1;
`;

export default GlobalStyles;
