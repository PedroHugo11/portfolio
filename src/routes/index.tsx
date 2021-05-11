import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/home';


// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Route path="/" basename={process.env.PUBLIC_URL}>
          <Home />
        </Route>
    </BrowserRouter>
  );
};

export default Routes;
