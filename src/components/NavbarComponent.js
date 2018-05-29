import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
} from "reactstrap";
class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            isOpen: false,
            width: 0,
            height: 0
        };
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar
                color="dark"
                dark
                sticky="true"
                className="sticky-top"
                style={{ width: "100%", height: 50, borderBottom: "2px #333 solid" }}
                expand="lg"
            >
                <NavbarBrand className="navBrand" disabled href="/">
                    <span style={{fontFamily: ""}}>At Large Brewing</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink disabled href="/beers">Beers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled href="/about-us">
                                About Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;
