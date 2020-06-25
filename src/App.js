import React from 'react';
import { Router, Route, Switch } from 'react-router';
import AdminLayout from './Components/common/layout/admin.layout';
import WebLayout from './Components/common/layout/web.layout';
import Error404 from './Components/error.404';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={WebLayout} />
          <Route path="/admin" component={AdminLayout} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
