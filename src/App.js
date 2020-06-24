import React from 'react';
import { Router, Route, Switch } from 'react-router';
import AppLayout from './Components/common/layout/app.layout';
import SimpleLayout from './Components/common/layout/simple.layout';
import Error404 from './Components/error.404';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SimpleLayout} />
          <Route path="/admin" component={AppLayout} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
