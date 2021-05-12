import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/home';
import Portfolio from 'src/pages/happy-file';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" basename={process.env.PUBLIC_URL}>
          <Home />
        </Route>
        <Route exact path="/happy-file" basename={process.env.PUBLIC_URL}>
          <Portfolio /> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
