import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WebHome from '../../website';
import LoginPage from '../../auth/login';
import Error404 from '../../error.404';

const WebLayout = ({ match }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-3 align-self-center">
                    <Switch>
                        <Route path={`${match.path}`} exact component={WebHome} />
                        <Route path={`${match.path}login`} exact component={LoginPage} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default WebLayout;