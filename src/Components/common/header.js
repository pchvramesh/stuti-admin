import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    toggle = () => {
        console.log(this.props);
        this.props.sidebar.current.toggle();
    }

    render() {
        return (
            <div className="app-nav-bar">
                <Navbar className="app-header" color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <NavbarBrand className="mr-auto">Stuti Admin</NavbarBrand>
                    <UncontrolledDropdown inNavbar>
                        <DropdownToggle nav caret>
                            John Doe
                  </DropdownToggle>
                        <DropdownMenu right>
                            <div className="menu-item">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faCog} />
                                </span>
                                <span className="label">Settings</span>
                            </div>
                            <div className="menu-item">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </span>
                                <span className="label">Logout</span>
                            </div>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Navbar>
            </div>
        );
    }
}


export default Header;