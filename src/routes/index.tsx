import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from 'src/pages/home';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" basename={process.env.PUBLIC_URL}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
