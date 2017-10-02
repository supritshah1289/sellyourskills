import React from 'react';
import {Link, IndexLink} from 'react-router';
//do something here for dropdown menu using react-bootstrap
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
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
};
*/

const Header = () => {
  return(
    <Navbar inverse collapseOnSelect className="nav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">SYS</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
          <IndexLinkContainer to="/" href="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about" href="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/course" href="/course">
            <NavItem eventKey={2}>Course</NavItem>
          </LinkContainer>
        <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
          <LinkContainer to="/mehndi" href="/mehndi">
          <MenuItem eventKey={3.1}>Mendhi</MenuItem>
          </LinkContainer>

          <MenuItem eventKey={3.2}>Make up Artist(MUA)</MenuItem>
          <MenuItem eventKey={3.3}>Garba Singer</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/signup" href="/signup">
          <NavItem eventKey={1} href="/signup">Sign Up</NavItem>
        </LinkContainer>

        <LinkContainer to="/login" href="/login">
          <NavItem eventKey={2} href="/login">Log in</NavItem>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
