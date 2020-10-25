import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'src/pages/home';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
