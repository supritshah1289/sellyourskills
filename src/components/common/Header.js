import React from 'react';
import {Link, IndexLink} from 'react-router';
//do something here for dropdown menu using react-bootstrap
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import PropTypes from 'prop-types';
/*const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active"> Home </IndexLink>
      {" | "}
      <Link to="course" activeClassName="active"> Course </Link>
      { " | " }
      <Link to="about" activeClassName="active"> About </Link>
    </nav>
  );
};*/


const Header = () => {
  return(
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to="home">
          <NavItem eventKey={1} href="/">Home</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="about">
          <NavItem eventKey={2} href="/about">About</NavItem>
        </IndexLinkContainer>

        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};


export default Header;
