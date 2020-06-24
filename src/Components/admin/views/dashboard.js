import React from 'react';
import '../../../styles/dashboard.scss';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid px-4">
                <div className="d-flex no-gutters flex-row">
                    <div className="page-title">Dashboard</div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column text-center p-3">
                                    <span className="stat-title">Users</span>
                                    <span className="stat-value">2,300</span>
                                    <span className="stat-label">50%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;