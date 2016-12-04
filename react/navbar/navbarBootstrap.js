import React from 'react';
import {Navbar,Nav,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

var navbarInstance = React.createClass({
    render:() => {
        return(    <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/home">MyApp</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title="Men" id="basic-nav-dropdown">
                                <LinkContainer to="/shirts">
                                    <MenuItem eventKey={1.1}>Shirt</MenuItem>
                                </LinkContainer>
                                <MenuItem eventKey={1.2}>T-Shirt</MenuItem>
                                <MenuItem eventKey={1.3}>Trouser</MenuItem>
                                <MenuItem eventKey={1.4}>Jeans</MenuItem>
                            </NavDropdown>

                            <NavDropdown eventKey={2} title="Women" id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1}>Action</MenuItem>
                                <MenuItem eventKey={2.2}>Another action</MenuItem>
                                <MenuItem eventKey={2.3}>Something else here</MenuItem>
                                <MenuItem eventKey={2.4}>Separated link</MenuItem>
                            </NavDropdown>

                            <NavDropdown eventKey={3} title="Kids" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                            </NavDropdown>

                            <NavDropdown eventKey={4} title="Accessories" id="basic-nav-dropdown">
                                <MenuItem eventKey={4.1}>Action</MenuItem>
                                <MenuItem eventKey={4.2}>Another action</MenuItem>
                                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                                <MenuItem eventKey={4.4}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={5} href="#">Login</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )}
});

export default navbarInstance;