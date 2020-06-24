import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    componentDidUpdate(prevProps){
        console.log(prevProps);
        if(prevProps.location.key !== this.props.location.key){
            this.setState({isOpen:false})
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleMenu = (event) => {
        event.stopPropagation();
        event.currentTarget.classList.toggle('show')
    }
    render() {
        const { isOpen } = this.state;
        const { location } = this.props;
        
        return (
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>
                    <div className="side-nav-item">
                        <span className="icon">
                            <FontAwesomeIcon icon={faTachometerAlt} />
                        </span>
                        <span>
                            Dashboard
                    </span>
                    </div>
                </Link>
                <div className={`side-nav-item ${location.pathname.includes('users') ? 'active' : ''}`}>
                    <div onClick={this.toggleMenu} className={`${location.pathname.includes('users') ? 'show' : ''}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faUsers} />
                        </span>
                        <span>Users</span>
                        <span className="icon float-right">
                            <FontAwesomeIcon icon={faChevronRight} />
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                    <ul className="side-sub-menu">
                        <Link to="/admin/users/list"><li className="sub-menu-item">List</li></Link>
                        <Link to="/admin/users/add"><li className="sub-menu-item">Add</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;