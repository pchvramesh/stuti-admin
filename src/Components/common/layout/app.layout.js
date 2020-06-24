import React from 'react';
import {Route, Switch } from 'react-router';
import Header from '../header';
import Footer from '../footer';
import SideBar from '../sidenav';
import Dashboard from '../../admin/views/dashboard';
import UsersList from '../../admin/views/users/users.list';
import UserEdit from '../../admin/views/users/users.edit';
import UserAdd from '../../admin/views/users/users.add';
import Error404 from '../../error.404';

class AppLayout extends React.Component {
    componentDidMount() {
        let user = localStorage.getItem('user');
        //TODO un auth user redirection
        if (!user) {
            //this.props.history.replace('/');
        }
    }
    render = () => {
        const sidebar = React.createRef();
        const header = React.createRef();
        const {match} = this.props;
        return (
            <div className="container-fluid d-flex flex-column">
                <Header ref={header} sidebar={sidebar} />
                <div className="row main-container">
                    <SideBar ref={sidebar} location={this.props.location} />
                    <div className="content-container">
                        <div className="main-content-container">
                            <Switch>
                                <Route path={match.path} exact component={Dashboard} />
                                <Route path={`${match.path}/users/list`} exact component={UsersList} />
                                <Route path={`${match.path}/users/add`} exact component={UserAdd} />
                                <Route path={`${match.path}/users/edit/:user_id`} exact component={UserEdit} />
                                <Route component={Error404} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppLayout;