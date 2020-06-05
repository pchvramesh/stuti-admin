import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="app-header" color="light" light expand="md">
            <NavbarToggler onClick={toggle} />
            <NavbarBrand className="mr-auto" href="/">Reactstrap</NavbarBrand>
            <UncontrolledDropdown inNavbar>
                <DropdownToggle nav caret>
                    Options
              </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Navbar>
    );
}


export default Header;