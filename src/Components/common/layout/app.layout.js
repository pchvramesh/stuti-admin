import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SideBar from '../sidenav';

import HomePage from '../../home';

class AppLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="row main-container">
                        <div className="side-nav">
                            <SideBar />
                        </div>
                        <div className="content-container">
                            <HomePage />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AppLayout;